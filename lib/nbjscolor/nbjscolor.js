var nbjscolor = {};

nbjscolor.nbjsColors = [
  '#ff5a5f', // rausch
  '#7b0051', // hackb
  '#007A87', // kazan
  '#00d1c1', // babu
  '#8ce071', // lima
  '#ffb400', // beach
  // '#b4a76c', // barol
  '#6A5ACD',
  '#ff8083',
  '#cc0086',
  '#00a1b3',
  '#00ffeb',
  '#bbedab',
  '#ffd266',
  // '#cbc29a',
  '#8B2323',
  '#ff3339',
  '#ff1ab1',
  '#005c66',
  '#00b3a5',
  '#55d12e',
  '#b22222',
  '#009ACD'
  // '#b37e00',
  // '#988b4e',
];

nbjscolor.categoryGenerator1 = function () {
  // Color factory
  randomSeed = Math.floor(Math.random() * 21);
  const seen = {};
  return function (s) {
    if (!s) {
      return;
    }
    let stringifyS = String(s);
    // next line is for superset series that should have the same color
    stringifyS = stringifyS.replace('---', '');
    if (seen[stringifyS] === undefined) {
      seen[stringifyS] = randomSeed + Object.keys(seen).length;
    }
    /* eslint consistent-return: 0 */
    return nbjscolor.nbjsColors[seen[stringifyS] % nbjscolor.nbjsColors.length];
  };
};
