// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

// 1 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

// 2 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// 3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let sectionCente = document.createElement('section');
sectionCente.className = 'center-content';
main.appendChild(sectionCente);

// 4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerText = 'O termo Mafagafo designa um dos personagens mais tradicionais entre os trava-línguas da língua portuguesa.[1][2] Segundo o Dicionário Michaelis da Língua Portuguesa pode adquirir também o significado de "abrigo de malandros",[3] embora no trava-línguas o termo identifique uma espécie imaginária de animal.';
sectionCente.appendChild(p);

// 5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

// 6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

// 7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
sectionLeft.appendChild(img);

// 8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let ul = document.createElement('ul');
let itemsLi = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (i = 0; i < itemsLi.length; i += 1) {
  let itemList = itemsLi[i];

  let li = document.createElement('li');
  li.innerText = itemList;
  ul.appendChild(li);
}
sectionRight.appendChild(ul);

// 9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
let h3one = document.createElement('h3');
let h3two = document.createElement('h3');
let h3three = document.createElement('h3');

main.appendChild(h3one);
main.appendChild(h3two);
main.appendChild(h3three);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 1 🚀 Adicione a classe title na tag h1 criada;
h1.className = 'title';

// 2 🚀 Adicione a classe description nas 3 tags h3 criadas;
h3one.className = 'description';
h3two.className = 'description';
h3three.className = 'description';

// 3 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
main.removeChild(sectionLeft);

// 4 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
sectionRight.style.marginRight = 'auto';

// 5 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
sectionCente.style.backgroundColor = 'rgb(76,164,109)'

// 6 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let liItems = document.querySelectorAll('li');

for (i = 0; i < liItems.length; i += 1) {
  let element = liItems[i];
  if (element.innerText.includes('nove') || element.innerText.includes('dez')) {
    ul.removeChild(element);
  }
}