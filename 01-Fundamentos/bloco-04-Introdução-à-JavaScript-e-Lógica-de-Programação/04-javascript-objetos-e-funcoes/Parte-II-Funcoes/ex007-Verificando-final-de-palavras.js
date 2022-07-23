// 7 - Crie uma função que receba uma string word e outra string ending. 
// Verifique se a string ending é o final da string word. Considere que a string 
// ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

function verificandoFinalPalavras(palavraInteira, partePalavra){
  let palavraFim = palavraInteira.slice(-2);
  // console.log(palavraFim);
  if(partePalavra>=palavraInteira){
    return `Parte final da palavra maior ou igual a palavra em si, tente novamente.`
  }
  if(palavraFim===partePalavra){
    return true;
  }else{
    return false;
  }
}
console.log(verificandoFinalPalavras('wanderson', 'on'));
