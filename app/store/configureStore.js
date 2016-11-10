var Redux = require('redux');
//var thunk = require('redux-thunk').default;

var {nameReducer, hobbiesReducer, moviesReducer, mapReducer, footballersReducer} = require('../reducers');

export var configure = () => {
  var reducer = Redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer,
    footballers: footballersReducer
  });

  var store = Redux.createStore(reducer, Redux.compose(

    // necessaria per usare il redux devTools su Chrome
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
