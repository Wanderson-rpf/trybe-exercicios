// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior 
// quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorNome(array){
  let nome = '';

  for(let i=0;i<array.length;i++){
    if(array[i].length>nome.length){
      nome = array[i]
    }
  }
  return `O maior nome da lista é ${nome}.`
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
