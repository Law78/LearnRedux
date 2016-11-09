var redux = require('redux');

console.log('Redux todo starting example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos:[]
}
// Il reducer è responsabile della computazione del nuovo stato
var reducer = (state = stateDefault, action) => {
  console.log('New Action', action);
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      var {searchText} = action;
      return {...state, searchText}
  }
  return state;
};
// Lo store si crea a partire da una funzione reducer o una combinazione di questi
var store = redux.createStore(reducer, redux.compose(
  // necessaria per usare il redux devTools su Chrome
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe: ci permette di "ascoltare" i cambiamenti
var unsubscribe = store.subscribe( () => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
  console.log('currentState (subscribe)', state.searchText);
});

console.log('currentState', store.getState());

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'prova!'
}
// Il metodo dispatch prende come argomento una action.
store.dispatch(action);
console.log('currentState', store.getState());

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Altra ricerca!'
}
store.dispatch(action);
