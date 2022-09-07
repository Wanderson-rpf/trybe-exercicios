// Lidando com erros em operações assíncronas

// Vamos praticar tudo isso por meio deste exercício de fixação:
// 1 - A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. 
// Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado. Com base nisso, você deve realizar as seguintes ações:
// Adicione um segundo parâmetro, que deve ser uma callback, na função getCountry;
// Retorne essa callback na função getCountry, de forma que trate a mensagem de erro.

// callback-errors.js

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, onError) => { // 1 -Adiciona o parâmetro onError como segundo parâmetro da função getCountry;
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      return onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
      // insira uma `callback` como retorno da função em caso de erro
      return onError(errorMessage); // Insere a callback onError dentro do else da função getCountry; e Adiciona o parâmetro errorMessage na callback onError.
    }
  }, delay());
};

// Deve imprimir:
//  - Em caso de sucesso: "O país retornado é Brasil"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryName, printErrorMessage);

// Deve imprimir:
//  - Em caso de sucesso: "A moeda corrente do Brasil é Real"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryCurrency, printErrorMessage);