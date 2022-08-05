// document.querySelector('#btn-enviar').addEventListener('click', (event) => {
//   event.preventDefault();
// });

document.querySelector('#text-respost').addEventListener('input', () => {
  const textArea = document.querySelector('#text-respost').value;
  if (textArea.length > 500) {
    window.alert('Dados inválidos.');
  } else {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});
