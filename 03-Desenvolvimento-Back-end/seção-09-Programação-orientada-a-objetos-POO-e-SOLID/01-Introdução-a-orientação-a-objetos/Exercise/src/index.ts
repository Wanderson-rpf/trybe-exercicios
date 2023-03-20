import Client from "./Client";
import Data from "./Data";
import Items from "./Items";
import Order from "./Order";
import Student from "./Students";

console.log('<---------- Exercise 01 and 02 ---------->');

const student01 = new Student({
  matriculation: '0001',
  name: 'João',
  noteProofs: [5, 4, 7, 9],
  noteWorks: [5, 8]
});
console.log(student01);
console.log('Total notes:', student01.totalNotes());
console.log('Average notes:', student01.averageNotes());

const student02 = new Student({
  matriculation: '0002',
  name: 'Maria',
  noteProofs: [7, 8, 7, 9],
  noteWorks: [5, 6]
});
console.log(student02);
console.log('Total notes:', student02.totalNotes());
console.log('Average notes:', student02.averageNotes());


console.log('<---------- Exercise 03 and 04 ---------->');

const client = new Client('João');
console.log('Client:', client);

const sandwich = new Items('Sanduíche Natural', 5.00);
const juice = new Items('Suco de Abacaxi', 5.00);
const dessert = new Items('Gelatina de Uva', 2.50);

const order = new Order({
  client: client.name, 
  items: [sandwich, juice, dessert], 
  payment: 'dinheiro',
  discount: 0.10
});

console.log('Order:', order);
console.log('Total:$', order.calculateTotal());
console.log('Total with discount:$', order.calculateTotalWithDiscount());

console.log('<---------- Exercise 05 and 06 ---------->');

const myDate = new Data({
  day:28, 
  month: 7, 
  year: 1990
});
console.log(myDate);

console.log(myDate);
console.log('Dia: ', myDate.day);
console.log('Mês: ', myDate.month);
console.log('Mês por extenso: ', myDate.getMonthName());
console.log('Ano: ', myDate.year);
console.log('É ano bissexto: ', myDate.isLeapYear() ? 'Sim' : 'Não');
console.log(myDate.format('dd/mm/aaaa'));
console.log(myDate.format('dd-mm-aaaa'));
console.log(myDate.format('aaaa/mm/dd'));
console.log(myDate.format('aaaa-mm-dd'));
console.log(myDate.format('dd de M de aa'));
console.log(myDate.format('dd, M de aaaa'));

const otherDate = new Data({
  day:30, 
  month: 1, 
  year: 2021
});

const compared = myDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data({
  day:31, 
  month: 2, 
  year: 2021
});

console.log('Teste data inválida: ', invalidDate);

// formato inválido
console.log(invalidDate.format('a m d'));

