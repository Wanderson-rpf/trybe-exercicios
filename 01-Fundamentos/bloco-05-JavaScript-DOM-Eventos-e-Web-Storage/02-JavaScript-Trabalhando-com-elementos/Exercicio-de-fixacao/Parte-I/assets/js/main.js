// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let element1 = document.getElementById('elementoOndeVoceEsta').parentElement;
console.log(element1);
element1.style.background = 'gray';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerHTML = "Eu sou o primeiro filho do filho!";

// Acesse o primeiroFilho a partir de pai.
let pai = document.getElementById('pai').firstElementChild;
console.log(pai);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let primeiroFilho = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
console.log(primeiroFilho);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atencao = document.getElementById('elementoOndeVoceEsta').nextSibling;
console.log(atencao);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
console.log(terceiroFilho);

// Agora acesse o terceiroFilho a partir de pai.
let terceiroFilhoDeNovo = document.getElementById('pai').lastElementChild.previousElementSibling;
console.log(terceiroFilhoDeNovo);