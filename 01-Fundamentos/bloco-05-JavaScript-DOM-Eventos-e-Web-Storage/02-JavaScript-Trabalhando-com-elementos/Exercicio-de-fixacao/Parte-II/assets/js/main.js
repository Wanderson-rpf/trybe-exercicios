// Crie um irmão para elementoOndeVoceEsta.
let elementFather = document.querySelector('#pai');
let newChild = document.createElement('div');
elementFather.appendChild(newChild);

// Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let son = document.createElement('p');
elementoOndeVoceEsta.appendChild(son);

// Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let cousin = document.createElement('h2');
primeiroFilhoDoFilho.appendChild(cousin);

// A partir desse filho criado, acesse terceiroFilho.
let element = document.querySelector('h2').parentNode.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling;
console.log(element);
