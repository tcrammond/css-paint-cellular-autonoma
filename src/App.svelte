<script lang="ts">
  let color1 = "#00A8C8";
  let color2 = "#F9F2E7";
  let seedType = "2";
  let rule = 225;
  let boxSize = 3;
  let seed = 'sesame'

  let rules = new Array(255).fill(0).map((_, i) => i + 1);
</script>

<main>
  <section>
    <h1>Simple cellular autonoma as CSS backgrounds</h1>
    <p>
      Reference: <a
        href="https://mathworld.wolfram.com/ElementaryCellularAutomaton.html"
        target="_blank">Elementary Cellular Autonoma on Wolfram Alpha</a
      >
    </p>
  </section>

  <section
    class="the-painters-canvas"
    style={`
    --seedType: ${seedType};
    --rule: ${rule};

    --color-1: ${color1};
    --color-2: ${color2};

    --box-size: ${boxSize};
  `}
    tabindex="0"
    title="A grid pattern following the cellular autonoma rule {rule}, in colors {color1} and {color2}."
  />

  <section class="controls">
<label for="rule">
      Rule
      <!-- <input type="number" min="1" max="255" step="1" bind:value={rule} name="rule" id="rule" /> -->
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

    <label for="seed">
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

    <label for="secondary"
      >Seed
      <input
        type="text"
        name="seed"
        id="seed"
        bind:value={seed}
      />
    </label>

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

    margin: 0 auto;
  }

  section {
    grid-column: 2;
    margin-bottom: 1em;
  }

  .controls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  label {
    display: block;
  }

  input {
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
    /* Full bleed */
    /* grid-column: 1 / -1; */

    width: 100%;
    height: 350px;

    outline: 1px solid black;
    background-image: paint(cellular);
  }
</style>
