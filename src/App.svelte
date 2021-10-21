<script lang="ts">
  let color1 = '#fff'
  let color2 = '#000'
  let seed = '2'
  let rule = '30'
  let boxSize = 5
</script>

<main>
  <section>
    <h1>Simple cellular autonoma as CSS backgrounds</h1>
  <p>
    Reference: <a
      href="https://mathworld.wolfram.com/ElementaryCellularAutomaton.html"
      target="_blank">Elementary Cellular Autonoma on Wolfram Alpha</a>
  </p>
  </section>

  <section
    class="the-painters-canvas"
    style={`
    --seed: ${seed};
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
      <select bind:value={rule} name="rule" id="rule">
        <option value="30">Rule 30</option>
        <option value="225">Rule 225</option>
      </select>
    </label>

    <label for="seed">
      Initial seed type
      <select bind:value={seed} name="seed" id="seed">
        <option value="1">Center filled cell</option>
        <option value="2">Random (10% chance for each cell to be filled)</option>
      </select>
    </label>

    <!-- :thinking: Why are initial selected colors shown as black? -->
    <label for="primary"
      >Primary color
      <input
        type="color"
        name="primary"
        id="primary"
        bind:value={color2}
        style="height: 50px;"
      />
    </label>

    <label for="secondary"
      >Secondary color
      <input
        type="color"
        name="secondary"
        id="secondary"
        bind:value={color1}
        style="height: 50px;"
      />
    </label>

    <label for="size">
      Cell size (px)
      <input type='number' bind:value={boxSize} name="size" id="size" step="1" min="1" max="25" />
    </label>

  </section>

  <section>
    <p><em>Small cell sizes and/or large screens will be expensive to generate. Please don't overwork your computer 💆</em></p>
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
      min(65ch, 100%)
      1fr;

    text-align: center;
    margin: 0 auto;
  }

  section {
    grid-column: 2;
    margin-bottom: 1em;
  }

  .controls {
    display: flex;
  }

  .the-painters-canvas {
    /* Full bleed */
    grid-column: 1 / -1;

    height: 250px;

    outline: 1px solid black;
    background-image: paint(cellular);
  }
</style>
