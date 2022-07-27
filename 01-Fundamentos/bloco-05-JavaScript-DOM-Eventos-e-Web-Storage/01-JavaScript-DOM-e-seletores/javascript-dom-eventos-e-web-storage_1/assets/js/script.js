/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function alterText() {
  document.getElementsByTagName('p')[1].innerText = 'Me vejo em 2 anos sendo um programador Web bem sucedido!';
}
alterText();

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function alterColor() {
  document.getElementsByClassName('main-content')[0].style.background = 'rgb(76,164,109)';
}
alterColor();

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function altColorCenter() {
  document.getElementsByClassName('center-content')[0].style.background = '#fff';
}
altColorCenter();

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function correctTitle() {
  document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript';
}
correctTitle();

// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
function wordUpperCase() {
  for (let i = 0; i < document.querySelectorAll('p').length; i += 1){
    document.querySelectorAll('p')[i].style.textTransform = 'upperCase';
  }
}
wordUpperCase();

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraph() {
  for (let i = 0; i < document.querySelectorAll('p').length; i += 1){
    console.log(document.querySelectorAll('p')[i].innerText);
  }
}
showParagraph();