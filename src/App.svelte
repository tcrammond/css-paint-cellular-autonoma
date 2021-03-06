<script lang="ts">
  import examples from "./examples";

  const urlParams = new URLSearchParams(window.location.search);

  let color1 = urlParams.get("bg") ?? "#00A8C8";
  let color2 = urlParams.get("fg") ?? "#F9F2E7";
  let seedType = urlParams.get("type") ?? "2";
  let rule = parseInt(urlParams.get("rule") ?? "225", 10);
  let boxSize = parseInt(urlParams.get("size") ?? "5", 10);
  let seed = parseInt(urlParams.get("seed") ?? "1234", 10);

  console.table({
    rule,
    seedType,
    seed,
    boxSize,
    color1,
    color2,
  });

  let rules = new Array(255).fill(0).map((_, i) => i + 1);

  function useExample(exampleName) {
    let example = examples[exampleName];
    rule = example.rule;
    seedType = example.seedType;
    boxSize = example.boxSize;
    seed = example.seed;
    color1 = example.color1;
    color2 = example.color2;
  }

  function onControlsChange(e) {
    const { rule, seedType, size, seed, primary, secondary } =
      e.target.form.elements;
    urlParams.set("rule", rule.value);
    urlParams.set("type", seedType.value);
    urlParams.set("seed", seed.value);
    urlParams.set("fg", primary.value);
    urlParams.set("bg", secondary.value);
    urlParams.set("size", size.value);

    history.replaceState(
      null,
      "",
      window.location.pathname + "?" + urlParams.toString()
    );
  }
</script>

<div class="page">
  <main>
    <section>
      <h1>CSS Paint backgrounds from simple cellular autonoma</h1>
      <p>
        A cellular autonoma is a grid of colored cells that evolves according to
        a set of rules. The rules dictate how the next cell should be colored
        based on the neighbouring cells. You can learn more by visiting <a
          href="https://mathworld.wolfram.com/ElementaryCellularAutomaton.html"
          target="_blank">Elementary Cellular Autonoma on Wolfram Alpha</a
        >
      </p>
      <p>
        In this example, we use the <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API"
          target="_blank">CSS Houdini Painting API</a
        > to paint the cellular autonoma as a background image.
      </p>
    </section>

    <section
      class="the-painters-canvas"
      style={`
    --seedType: ${seedType};
    --seed: ${seed};
    --rule: ${rule};

    --color-1: ${color1};
    --color-2: ${color2};

    --box-size: ${boxSize};
  `}
      tabindex="0"
      title="A grid pattern following the cellular autonoma rule {rule}, in colors {color1} and {color2}."
    />

    <section>
      <h2>Examples</h2>
      <div class="examples">
        {#each Object.entries(examples) as [key, example]}
          <button
            class="example-button {key}"
            on:click={(e) => useExample(key)}
          >
            {key
              .split("-")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        {/each}
      </div>
    </section>

    <section>
      <h2>Options</h2>
      <form on:change={onControlsChange}>
        <div class="controls">
          <label for="rule">
            Rule
            <a
              href="http://atlas.wolfram.com/01/01/{rule}/"
              target="_blank"
              title="View rule {rule} on Wolfram Alpha">🔗</a
            >
            <select bind:value={rule} name="rule" id="rule">
              {#each rules as n}
                <option value={n}>Rule {n}</option>
              {/each}
            </select>
          </label>

          <label for="primary"
            >Primary color
            <input
              type="color"
              name="primary"
              id="primary"
              bind:value={color2}
            />
          </label>

          <label for="size">
            Cell size (px)
            <input
              type="number"
              bind:value={boxSize}
              name="size"
              id="size"
              step="1"
              min="1"
              max="25"
            />
          </label>

          <label for="seedType">
            Seed type
            <select bind:value={seedType} name="seedType" id="seedType">
              <option value="2">Random cells</option>
              <option value="1">Center cell</option>
            </select>
          </label>

          <label for="secondary"
            >Secondary color
            <input
              type="color"
              name="secondary"
              id="secondary"
              bind:value={color1}
            />
          </label>

          <label for="seed"
            >Seed
            <input type="number" name="seed" id="seed" bind:value={seed} />
          </label>
        </div>
      </form>
    </section>

    <section>
      <p>
        You can share what you've generated with others – just copy the URL of
        this page.
      </p>
      <p>
        <em
          >Painting small cell sizes can be expensive. Please don't overwork
          your computer</em
        > 💆
      </p>
    </section>
  </main>

  <footer>
    <hr />
    <p>
      ✨ <a href="https://github.com/tcrammond/css-paint-cellular-autonoma"
        >View the project on GitHub</a
      >
    </p>
  </footer>
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(#app) {
    margin: 0 auto;
  }

  .page {
    display: grid;
    grid-template-columns:
      1fr
      min(70ch, 100%)
      1fr;

    padding: 0 1rem;
    margin: 0 auto;
  }

  main,
  footer {
    grid-column: 2;
    margin-bottom: 1em;
  }

  .example-button {
    font-size: 16px;
    padding: 8px 16px;
    background: transparent;
    border: none;
    border-radius: 8px;
    margin: 0 8px 0 0;
  }

  .example-button:hover,
  .example-button:focus {
    outline: 2px solid black;
    outline-offset: 2px;
  }

  .dunes {
    background: #616b14;
    color: white;
  }
  .sky-fleet {
    background: #00a8c8;
    color: white;
  }
  .royal-triangles {
    background: #591c97;
    color: #e2e462;
  }
  .brimstone {
    background: black;
    color: #ff0000;
  }

  .controls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    gap: 10px;
  }

  label {
    display: block;
    font-weight: 500;
  }

  input {
    display: block;
    box-sizing: border-box;
    height: 27px;
  }

  input[type="color"] {
    display: block;
    width: 27px;
    padding: 0;
  }

  select {
    display: block;
    padding: 4px 8px;
  }

  #seed {
    font-family: monospace;
  }

  .the-painters-canvas {
    width: 100%;
    height: 350px;

    background-image: paint(cellular);
  }
</style>
