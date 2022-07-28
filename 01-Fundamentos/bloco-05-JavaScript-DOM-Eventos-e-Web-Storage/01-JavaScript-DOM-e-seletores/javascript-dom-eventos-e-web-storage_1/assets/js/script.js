/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function alterText(tag) {
  document.getElementsByTagName(tag)[1].innerText = 'Me vejo em 2 anos sendo um programador Web bem sucedido!';
}
alterText('p');

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function alterColor(selectClass) {
  document.getElementsByClassName(selectClass)[0].style.background = 'rgb(76,164,109)';
}
alterColor('main-content');

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function altColorCenter(selectClass) {
  document.getElementsByClassName(selectClass)[0].style.background = '#fff';
}
altColorCenter('center-content');

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function correctTitle(tag) {
  document.getElementsByTagName(tag)[0].innerHTML = 'Exercício 5.1 - JavaScript';
}
correctTitle('h1');

// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function wordUpperCase(tag) {
  for (let i = 0; i < document.querySelectorAll(tag).length; i += 1){
    document.querySelectorAll(tag)[i].style.textTransform = 'upperCase';
  }
}
wordUpperCase('p');

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraph(element) {
  for (let i = 0; i < document.querySelectorAll(element).length; i += 1){
    console.log(document.querySelectorAll(element)[i].innerText);
  }
}
showParagraph('p');
