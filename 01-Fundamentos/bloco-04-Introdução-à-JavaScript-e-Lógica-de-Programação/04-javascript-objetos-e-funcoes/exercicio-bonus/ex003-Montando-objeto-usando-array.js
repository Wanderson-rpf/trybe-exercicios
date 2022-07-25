// 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a 
// quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 
// 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado 
// como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, 
// x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function listaDeFrutas(array){
  let cont = 0;
  let cesta = {};

  for(let item in array){
    cont = 0;
    for(let i=0;i<array.length;i++){
      if(array[item]===array[i]){
        cont += 1;
        cesta[array[item]] = cont;
      }
    }
  }
  const mensagem = [];
  for(i in cesta){
    let msg = `${cesta[i]} ${i}`;
    if(cesta[i]>1) msg += 's';  //Adicionando o S nas frutas que tem mais de uma.
    mensagem.push(msg);
  }
  // console.log(mensagem);

  return `Sua cesta possui: ${mensagem.join(', ')}.`;  //Adicionando virgula e espaço entre cada elemento da lista.
}

console.log(listaDeFrutas(basket));