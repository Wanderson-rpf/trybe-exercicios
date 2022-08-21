// Para fixar
// Vamos praticar com os seguintes exercícios:

// 1 - Crie uma função que retorne a string 'Acordando!!';
const goodMorning = () => 'Acordando!!';
console.log(goodMorning());

// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
const breakfast = () => 'Bora tomar café!!';
console.log(breakfast());

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
const goodNigth = () => 'Partiu dormir!!';
console.log(goodNigth());

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função 
// para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. 
const doingThings = (func) => func;
console.log(doingThings(breakfast())); 
