// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let listaPrimos = [];
let contador = 0;
let n = 33;
let maiorValor = 0;

for(let i=2;i<=n;i++){
  for(let x=2;x<=n+1;x++){
    if(i%x===0){
      contador += 1;
    }
  }
  if(contador===1){
    listaPrimos.push(i);
  }
  contador = 0;
}

if(listaPrimos.includes(n)){
  console.log(`O numero ${n} é primo.`)
}else{
  console.log(`O numero ${n} não é primo.`)
}
