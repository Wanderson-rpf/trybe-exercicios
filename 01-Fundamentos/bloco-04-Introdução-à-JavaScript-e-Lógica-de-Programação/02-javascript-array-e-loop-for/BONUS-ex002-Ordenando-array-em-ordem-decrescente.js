// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersCrescente = [];

for(let i=0;i<=numbers.length;i++){
  numbersCrescente = numbers.sort((a, b)=>{if(a>b)return -1; if(a<b)return 1; return 0});
}
console.log(numbersCrescente);