// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
  // return arr.flat();
}
console.log(flatten(arrays));