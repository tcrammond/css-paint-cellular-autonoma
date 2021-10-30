<script lang="ts">
  let color1 = "#00A8C8";
  let color2 = "#F9F2E7";
  let seedType = "2";
  let rule = 225;
  let boxSize = 3;
  let seed = 1234;

  let rules = new Array(255).fill(0).map((_, i) => i + 1);
</script>

<main>
  <section>
    <h1>CSS Paint backgrounds from simple cellular autonoma</h1>
    <p>
      A cellular autonoma is a grid of colored cells that evolves according to a
      set of rules. The rules dictate how the next cell should be colored based
      on the neighbouring cells. You can learn more by visiting <a
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
    <h2>Options</h2>
    <div class="controls">
      <label for="rule">
        Rule
        <a
          href="http://atlas.wolfram.com/01/01/225/"
          target="_blank"
          title="View rule on Wolfram Alpha">🔗</a
        >
        <select bind:value={rule} name="rule" id="rule">
          {#each rules as n}
            <option value={n}>Rule {n}</option>
          {/each}
        </select>
      </label>

      <label for="primary"
        >Primary color
        <input type="color" name="primary" id="primary" bind:value={color2} />
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
  </section>

  <section>
    <p>
      <em
        >Painting small cell sizes can be expensive. Please don't overwork your
        computer 💆</em
      >
    </p>
  </section>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    display: grid;
    grid-template-columns:
      1fr
      min(70ch, 100%)
      1fr;

      padding: 0 1rem;
    margin: 0 auto;
  }

  section {
    grid-column: 2;
    margin-bottom: 1em;
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

    outline: 1px solid black;
    background-image: paint(cellular);
  }
</style>
