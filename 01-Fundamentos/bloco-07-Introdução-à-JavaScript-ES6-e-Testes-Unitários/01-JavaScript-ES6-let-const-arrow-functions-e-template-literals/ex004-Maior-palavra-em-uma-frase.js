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