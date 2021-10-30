type Example = {
  rule: number,
  seedType: '1' | '2',
  boxSize: number,
  seed: number,
  color1: string,
  color2: string,
}

const examples: { [name: string]: Example } = {
  dunes: {
    rule: 57,
    seedType: '2',
    boxSize: 3,
    seed: 5555,
    color1: '#616B14',
    color2: '#FFFCAD',
  },
  'sky-fleet': {
    rule: 225,
    seedType: '2',
    boxSize: 3,
    seed: 1234,
    color1: '#00A8C8',
    color2: '#F9F2E7',
  },
  'royal-triangles': {
    rule: 210,
    seedType: '1',
    boxSize: 3,
    seed: 1234,
    color1: '#591C97',
    color2: '#E2E462',
  },
}

export default examples
