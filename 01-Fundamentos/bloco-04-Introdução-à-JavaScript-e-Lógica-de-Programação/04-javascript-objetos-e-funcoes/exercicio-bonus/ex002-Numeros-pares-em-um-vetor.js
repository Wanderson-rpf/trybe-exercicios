// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. 
// Através de um loop for, percorra essa variável, busque os números pares e os adicione a 
// um novo array que deverá ser retornado ao final pela pela função.

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(array){
  let = vetorPares = [];

  for(let i=0;i<array.length;i++){
    for(let p=0;p<array[i].length;p++){
      if(array[i][p]%2===0){
        vetorPares.push(array[i][p]);
      }
    }
  }
  return `Os valores pares do vetor são: [${vetorPares}]`;
}
console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));
