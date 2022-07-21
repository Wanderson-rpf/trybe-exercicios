console.log('-->Execicio 6:');
// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// - Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaXadrez = 'pe';

if(pecaXadrez.toLowerCase() === 'rainha'){
  console.log(`A peça informada foi o(a) ${pecaXadrez.toLocaleLowerCase()}: Ele(a) faz o movimento em linha reta para todos os lado e na diagonal de uma ou varias casas`)
}else if(pecaXadrez.toLowerCase() === 'rei'){
  console.log(`A peça informada foi o(a) ${pecaXadrez.toLocaleLowerCase()} ele(a) faz o movimento em linha reta para todos os lado e na diagonal porem, uma casa por vez`)
}else if(pecaXadrez.toLowerCase() === 'bispo'){
  console.log(`A peça informada foi o(a) ${pecaXadrez.toLocaleLowerCase()} ele(a) faz o movimento em linha reta na diagonal de uma ou varias casas`)
}else if(pecaXadrez.toLowerCase() === 'cavalo'){
  console.log(`A peça informada foi o(a) ${pecaXadrez.toLocaleLowerCase()} ele(a) faz o movimento em "L" para qualquer lado a partir da sua posição.`)
}else if(pecaXadrez.toLowerCase() === 'torre'){
  console.log(`A peça informada foi o(a) ${pecaXadrez.toLocaleLowerCase()} ele(a) faz o movimento em linha reta "exceto diagonal" de uma ou varias casas`)
}else if(pecaXadrez.toLowerCase() === 'peao'){
  console.log(`A peça informada foi o(a) ${pecaXadrez.toLocaleLowerCase()} ele(a) faz o movimento em linha reta todos os lado e na diagonal uma casa por vez`)
}else{
  console.log(`A peça ${pecaXadrez.toLocaleLowerCase()} informada não existe.`)
}