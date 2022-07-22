// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 7;
let espacos = n -1;

for(let l=1;l<=n;l+=2){
  let asterisco = '';
  for(let e=n-l/2;e>=1;e--){
    asterisco +=' ';
  }
  for(let x=1;x<=l;x++){
    if(x%2===0){
      asterisco += ' ';
    }else{
      asterisco += '*'
    }
  }
  console.log(asterisco);
  espacos--;
}
