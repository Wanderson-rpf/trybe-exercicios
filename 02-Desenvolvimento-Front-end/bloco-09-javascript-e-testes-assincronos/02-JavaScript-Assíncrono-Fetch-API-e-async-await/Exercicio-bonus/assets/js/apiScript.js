const fetchJoke = async () => { // * Função para burcar a piada (jokes)
  try { // * Tratamento de erros, tente fazer...
    // * Criando o objeto com os parametros que quero na função fetch
    const fetchConfig = {
      method: 'GET',
      headers: { 'Accept': 'application/json'}
    };
    const endPoint = 'https://icanhazdadjoke.com/'; // * Armazenando link
    const response = await fetch(endPoint, fetchConfig); // * Acessando API e passando as configurações
    const data = await response.json(); // * transformando em arquivo JSON
    return data.joke;
  } catch (error) {
    console.error(`Ocorreu um erro: ${error}`);
  }
};

const printJokes = async () => {
  const textJokes = document.getElementById('jokeContainer');
  textJokes.innerHTML = await fetchJoke();
};

window.onload = () => printJokes();
