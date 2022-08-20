const longestWord = (phrase) => {
  const listPhrase = phrase.split(' ');
  let bigWord = '';
  for (let index = 0; index < listPhrase.length; index += 1) {
    if (listPhrase[index].length > bigWord.length) {
      bigWord = listPhrase[index]
    }
  }
  return bigWord;
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))

// Solução professor

// const longestWord = (text) => {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length;
//           result = word;
//       }
//   }
//   return result;
// }

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Solução em uma linha
const longestWordOneLine = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWordOneLine('Antonio foi ao banheiro e não sabemos o que aconteceu'));