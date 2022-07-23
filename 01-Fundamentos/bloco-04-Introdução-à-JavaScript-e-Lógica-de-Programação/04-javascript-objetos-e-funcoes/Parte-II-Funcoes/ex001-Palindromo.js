// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, 
// ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function palindromo(palavra){
  let reverseWord = [];
  let p = palavra.split('');
  for(let i=p.length-1;i>=0;i--){
    reverseWord.push(p[i]);
  }
  if(palavra===reverseWord.join('')){
    // console.log('É um palindromo.')
    return true;
  }else{
    // console.log('Não é um palindromo.')
    return false;
  }
}

palindromo('arara');
