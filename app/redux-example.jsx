var Redux = require('redux');


var actions = require('./actions');
var store = require('./store/configureStore');
store = store.configure();


var displayPlayers = (team, players) => {
  if(!players) return;

  return players.reduce( (lista, player) => lista+= `${player.position}: ${player.name} <br/>`, `${team} <br/>`)
}

// Reducer


var unsubscribe = store.subscribe( () => {
  var state = store.getState();
  if (state.map.isFetching){
    document.getElementById('app').innerHTML = 'Fetching data...';
  } else if(state.map.url){
    document.getElementById('app').innerHTML = `<a href=${state.map.url} target="_blank">View Your Location</a>`
  } else {
    document.getElementById('app').innerHTML = 'No connection!';
  }

  if(state.footballers.isFetching){
    document.getElementById('footballers').innerHTML = 'Fetching Player data...';
  } else if(state.footballers.players){

    document.getElementById('footballers').innerHTML = displayPlayers(state.footballers.team, state.footballers.players);
  } else {
    document.getElementById('footballers').innerHTML = 'No results!';
  }
});

// Fetch hanno bisogno dello store. Non posso fare un require nell'index.js di actions in quanto otterrei
// sempre un nuovo store. Devo installare un middleware: redux-thunk

store.dispatch(actions.fetchLocation());

store.dispatch(actions.fetchPlayers(100));

/*store.dispatch(actions.nameChange('Lorenzo'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Programming'));

store.dispatch(actions.removeHobby(1));

store.dispatch(actions.addMovie('Titolo 1','Genre 1'));
store.dispatch(actions.addMovie('Titolo 2','Genre 2'));
store.dispatch(actions.addMovie('Titolo 3','Genre 3'));

store.dispatch(actions.removeMovie(1));

console.log('store:', store.getState());*/
