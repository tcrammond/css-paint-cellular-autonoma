class Cellular {
  static get inputProperties() {
    return [
      '--seedType',
      '--seed',
      '--rule',
      '--color-1',
      '--color-2',
      '--box-size',
    ];
  }

  paint(ctx, geometry, properties) {
    const seedType = parseInt(properties.get('--seedType'), 10) || 1;
    const seed = parseInt(properties.get('--seed'), 10) || 1234;
    const rule = parseInt(properties.get('--rule'), 10) || 30;
    const ruleValues = getRuleValues(rule)

    const color1 = properties.get('--color-1') || '#000';
    const color2 = properties.get('--color-2') || '#fff';
    const boxSize = parseInt(properties.get('--box-size'), 10) || 1;

    const gridSize = Math.floor(geometry.width / boxSize)
    const count = gridSize * gridSize
    const rand = mulberry32(seed);

    let grid = new Array(count).fill(0)

    // generate a first row
    if (seedType === 1) {
      grid[Math.floor(gridSize / 2)] = 1
    } else {
      for (let i = 0; i < gridSize; i++) {
        grid[i] = rand() >= 0.9 ? 1 : 0
      }
    }

    // generate values from autonoma
    for (let i = gridSize; i < grid.length; i++) {
      const [l, t, r] = getNeighbors(grid, gridSize, i)
      for (let panelIndex = 0; panelIndex < panels.length; panelIndex++) {
        const [rl, rt, rr] = panels[panelIndex]
        if (rl !== l) continue;
        if (rt !== t) continue;
        if (rr !== r) continue;
        grid[i] = ruleValues[panelIndex]
      }
    }

    // draw grid
    for (let i = 0; i < grid.length; i++) {
      const cell = grid[i]
      ctx.fillStyle = cell === 0 ? color1 : color2
      ctx.beginPath();
      const x = i % gridSize
      const y = Math.floor(i / gridSize)

      ctx.rect(x * boxSize, y * boxSize, boxSize, boxSize);
      ctx.fill();
    }
  }
}

// Every rule has the same panels/rules, it's the resulting values that change.
let panels = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
]

function getRuleValues (ruleNumber) {
  return (ruleNumber >>> 0).toString(2).padStart(8, '0').split('').map(s => +s)
}

function getNeighbors(grid, size, index) {
  const top = index - size
  const left = index - size - 1
  const right = index - size + 1
  return [
    grid[left],
    grid[top],
    grid[right]
  ]
}

// https://github.com/bryc/code/blob/master/jshash/PRNGs.md
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

registerPaint('cellular', Cellular);
