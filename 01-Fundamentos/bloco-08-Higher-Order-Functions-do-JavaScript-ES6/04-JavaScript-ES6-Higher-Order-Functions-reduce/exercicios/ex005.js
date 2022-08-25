const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA(arr) {
  return arr.reduce((acc, curr) => acc + curr.split('').reduce((acc, curr) => {
    if (curr === 'a' || curr === 'A') return acc + 1;
    return acc;
  }, 0), 0);
}
console.log(containsA(names));

// Segunda forma de fazer
function containsAs(arr) {
  return arr.join('').split('').reduce((acc, curr) => (curr === 'a' || curr === 'A') ? acc += 1 : acc, 0);
}

console.log(containsAs(names));
