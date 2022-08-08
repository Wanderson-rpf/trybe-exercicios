const backgroundPainel = document.querySelector('#background');
const colorLetterPainel = document.querySelector('#color-letter');
const fontSizePainel = document.querySelector('#font-size');
const fontTypePainel = document.querySelector('#font-type');
const defaultPainel = document.querySelector('#default');
const textArea = document.querySelector('.text');
const backgrounds = ['rgb(22, 56, 76)', 'rgb(9, 22, 33)', 'rgb(47, 54, 62)', 'rgb(255, 218, 64)', 'rgb(255, 255, 255)'];
const colorLetter = ['rgb(255, 218, 64)', 'rgb(255, 255, 255)', 'rgb(127, 255, 0)', 'rgb(40, 123, 255)', 'rgb(8, 74, 35)'];
const fontSize = ['0.8rem','1rem', '1.3rem', '1,5rem', '2rem'];

defaultPainel.addEventListener('click', function() {
  textArea.style.backgroundColor = '#fff8dc';
  textArea.style.color = '#2e3133';
});

backgroundPainel.addEventListener('click', function() {
  if(textArea.style.backgroundColor === 'rgb(255, 248,220)' || textArea.style.backgroundColor === '') {
    textArea.style.backgroundColor = backgrounds[0];
  } else if(textArea.style.backgroundColor === backgrounds[0]) {
    textArea.style.backgroundColor = backgrounds[1];
  } else if(textArea.style.backgroundColor === backgrounds[1]) {
    textArea.style.backgroundColor = backgrounds[2];
  } else if(textArea.style.backgroundColor === backgrounds[2]) {
    textArea.style.backgroundColor = backgrounds[3];
  } else if(textArea.style.backgroundColor === backgrounds[3]) {
    textArea.style.backgroundColor = backgrounds[4];
  } else if(textArea.style.backgroundColor === backgrounds[4]) {
    textArea.style.backgroundColor = backgrounds[0];
  }
});

colorLetterPainel.addEventListener('click', function() {
  if(textArea.style.color === 'rgb(46, 49, 51)' || textArea.style.color === '') {
    textArea.style.color = colorLetter[0];
  } else if(textArea.style.color === colorLetter[0]) {
    textArea.style.color = colorLetter[1];
  } else if(textArea.style.color === colorLetter[1]) {
    textArea.style.color = colorLetter[2];
  } else if(textArea.style.color === colorLetter[2]) {
    textArea.style.color = colorLetter[3];
  } else if(textArea.style.color === colorLetter[3]) {
    textArea.style.color = colorLetter[4];
  }else if(textArea.style.color === colorLetter[4]) {
    textArea.style.color = colorLetter[0];
  }
});

fontSizePainel.addEventListener('click', () => {
  if(textArea.style.fontSize === '1rem' || textArea.style.fontSize === '') {
    textArea.style.fontSize = fontSize[0];
  } else if(textArea.style.fontSize === fontSize[0]) {
    textArea.style.fontSize = fontSize[1];
  } else if(textArea.style.fontSize === fontSize[1]) {
    textArea.style.fontSize = fontSize[2];
  } else if(textArea.style.fontSize === fontSize[2]) {
    textArea.style.fontSize = fontSize[3];
  } else if(textArea.style.fontSize === fontSize[3]) {
    textArea.style.fontSize = fontSize[4];
  }else if(textArea.style.fontSize === fontSize[4]) {
    textArea.style.fontSize = fontSize[0];
  }
});