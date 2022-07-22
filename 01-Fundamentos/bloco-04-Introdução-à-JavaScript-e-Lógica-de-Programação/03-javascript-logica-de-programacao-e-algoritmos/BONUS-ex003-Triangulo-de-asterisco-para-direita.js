// Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;
let espacos = n -1;

for(let l=1;l<=n;l++){
  let asterisco = '';
  for(let e=n-l;e>=1;e--){  //cereja do bolo
    asterisco +=' ';
  }
  for(let x=1;x<=l;x++){
    asterisco += '*'
  }
  console.log(asterisco);
  espacos--;
}
