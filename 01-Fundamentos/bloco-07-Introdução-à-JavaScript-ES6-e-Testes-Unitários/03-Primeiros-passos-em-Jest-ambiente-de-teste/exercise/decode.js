function decode(word) {
  let wordDecoding = word.toString().split('');
  const decodeCode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u' };
  for (let i = 0; i < wordDecoding.length; i += 1) {
    for (let key in decodeCode) {
      if (wordDecoding[i] === key) {
        wordDecoding[i] = decodeCode[key];
      }
    }
  }
  return wordDecoding.join('');
}
console.log(decode('h2ll4'));
module.exports = decode;