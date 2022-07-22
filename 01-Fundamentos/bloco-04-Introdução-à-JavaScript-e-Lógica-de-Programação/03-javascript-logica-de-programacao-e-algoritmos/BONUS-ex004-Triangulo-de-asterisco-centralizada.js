// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let n = 5;
let espacos = n -1;

for(let l=1;l<=n;l+=2){
  let asterisco = '';
  for(let e=n-l/2;e>=1;e--){
    asterisco +=' ';
  }
  for(let x=1;x<=l;x++){
    asterisco += '*'
  }
  console.log(asterisco);
  espacos--;
}