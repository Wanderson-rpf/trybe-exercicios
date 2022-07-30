const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// ? Porque o elemento esta com a classe tech, ela desloca o elemento em -20px no eixo Y.
// ? firstLi.classList.remove('tech');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function upTech(e) {
  const ControlClass = document.querySelector('.tech'); // variavel de controle
  ControlClass.classList.remove('tech');
  e.target.className = 'tech';
}
firstLi.addEventListener('click', upTech);
secondLi.addEventListener('click', upTech);
thirdLi.addEventListener('click', upTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeTech() {
  const valueText = input.value;
  const classeTech = document.querySelector('.tech');
  if (classeTech.classList.contains('tech')) {
    classeTech.innerHTML = valueText;
    input.value = '';
  }

}
input.addEventListener('change', changeTech);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function redirect(e) {
  const element = e.target;
  console.log(element);
  window.alert('Você será redirecionado para outra página.');
  window.location.href = 'https://wanderson-rpf.github.io';
}
myWebpage.addEventListener('dblclick', redirect);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function mouseEnter(e) {
  const element = e.target;
  element.style.color = '#999';
}

function mouseOut(e) {
  const element = e.target;
  element.style.color = '#2fc18c';
}

document.querySelector('h1').addEventListener('mouseenter', mouseEnter);

document.querySelector('h1').addEventListener('mouseout', mouseOut);

// Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.