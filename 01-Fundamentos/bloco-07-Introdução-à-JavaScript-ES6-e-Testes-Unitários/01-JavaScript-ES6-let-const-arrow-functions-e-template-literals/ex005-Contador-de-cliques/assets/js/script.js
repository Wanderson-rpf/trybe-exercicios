const container = document.getElementById('container-count');
let countClick = 0;


const buttonClick = document.createElement('button');
buttonClick.setAttribute('id', 'click');
buttonClick.innerHTML = 'Click aqui!'
container.appendChild(buttonClick);

const pCount = document.createElement('p');
pCount.setAttribute('id', 'count');
pCount.textContent = `Contador de cliques: ${countClick}`;
container.appendChild(pCount)

buttonClick.addEventListener('click', () => {
  countClick ++;
  pCount.innerHTML = `Contador de cliques: ${countClick}`;
});