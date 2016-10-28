var redux = require('redux');
//var action = require('./actions');
import * as action from './actions';

var configureStore = require('./stores/configureStore.jsx');

console.log('Redux starting example');
console.log('Action loaded:', action);

const store = configureStore();

var currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch(action.changeName("Lorenzo"));
console.log('currentState', store.getState());

store.dispatch(action.addLavoro('Regione Lazio'));
console.log('currentState', store.getState());

store.dispatch(action.changeSurname("Roselli"));
console.log('currentState', store.getState());

store.dispatch(action.addLavoro('Meraviglia delle Meraviglie'));
console.log('currentState', store.getState());
