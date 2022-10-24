// Importando o REDUX fora da versão RTK
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 1 - Crie uma store para a nossa aplicação.
const store = createStore(reducer);

// 2 - Crie um reducer, implementando um switch que retorne apenas o estado inicial como default.
const reducer = (state = INITIAL_STATE, action) => {
  return state
}

