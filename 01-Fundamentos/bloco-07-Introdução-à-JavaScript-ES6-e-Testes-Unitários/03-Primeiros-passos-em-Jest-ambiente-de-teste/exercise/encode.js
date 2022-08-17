function encode(word) {
  let wordEncoding = word.split('');
  const encodeCode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5 };
  for (let i = 0; i < wordEncoding.length; i += 1) {
    for (let key in encodeCode) {
      if (wordEncoding[i] === key) {
        wordEncoding[i] = encodeCode[key];
      }
    }
  }
  return wordEncoding.join('');
}
console.log(encode('hellou'));
module.exports = encode;