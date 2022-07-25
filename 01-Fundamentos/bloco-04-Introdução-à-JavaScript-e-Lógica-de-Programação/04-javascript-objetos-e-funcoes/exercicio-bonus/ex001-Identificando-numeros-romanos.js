// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o 
// número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles 
// devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está 
// à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

function identificandoNumedorRomano(numeroRomano){
  numeroRomano = numeroRomano.toUpperCase();
  const algarismosRomanos = {
    'I':1,
    'IV':4,
    'V':5,
    'IX':9,
    'X':10,
    'XL':40,
    'L':50,
    'XC':90,
    'C':100,
    'CD':400,
    'D':500,
    'CM':900,
    'M':1000
  }
  const tamanhoNumero = numeroRomano.length;
  let numero = algarismosRomanos[numeroRomano[tamanhoNumero-1]];
  let atual = algarismosRomanos[numeroRomano[tamanhoNumero-1]];
 
  for(let i=2;i<=tamanhoNumero; i++){
    const prox = algarismosRomanos[numeroRomano[tamanhoNumero-i]];
    if(atual <= prox){
      numero += prox;
    }else{
      numero -= prox;
    }
    atual = prox;
  }
  return `O número romano ${numeroRomano} representa o numero ${numero}.`;
}
console.log(identificandoNumedorRomano('cxc'));
