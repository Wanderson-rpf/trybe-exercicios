// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do 
// primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, 
// Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os 
// valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no 
// console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim'
};

let info2 = {
  personagem: 'Tio patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

console.log(`${info.personagem} e ${info2.personagem}`);
console.log(`${info.origem} e ${info2.origem}`);
console.log(`${info.nota} e ${info2.nota}`);
console.log(`Ambos recorrentes`);

