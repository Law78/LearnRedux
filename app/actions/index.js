// JSBIN: https://jsbin.com/toyeci/edit?js,console
https://jsbin.com/gesacay/19/edit?js,console

var axios = require('axios');


export var nameChange = (name) => {
  /*return () => {

  }*/
  return {
    type: 'CHANGE_NAME',
    name,
    funcAsync: function(){
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(res){
          console.log(res.data);
      });
    }
  };
};

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

export var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

export var startLocationFetch = () => {
  return {
      type: 'START_LOCATION_FETCH'
  };
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

/*
L'idea è ritornare un oggetto Action con una funzione.
*/
/*
export var fetchLocation = () => {
  return (dispatch) => {
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function(res){
      var loc = res.data.loc;
      var baseURL = 'http://maps.google.com/?q='
      dispatch(completeLocationFetch(`${baseURL}${loc}`));
    });
  };
};*/

export var fetchLocation = (store) => {
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function(res){
    var loc = res.data.loc;
    var baseURL = 'http://maps.google.com/?q='
    store.dispatch(completeLocationFetch(`${baseURL}${loc}`));
  });
};



export var startPlayersFetch = () => {
  return {
    type: 'START_PLAYERS_FETCH'
  };
};

export var errorPlayersFetch = () => {
  return {
    type: 'ERROR_PLAYERS_FETCH',
    error: 'Errore nel prelevare il dato'
  };
};

export var completePlayersFetch = (players, team) => {
  return {
    type: 'COMPLETE_PLAYERS_FETCH',
    players,
    team
  }
}

export var fetchTeam = (idTeam) => {
  const config = {
    timeout: 1000,
    method: 'get', // default
    responseType: 'json', // default
    headers: {'X-Auth-Token': 'f4d452d5a6ca4a7c99f84b5b99ba63c0'},
    url: `http://api.football-data.org/v1/teams/${idTeam}`
  };
  return axios(config);

}

export var fetchPlayers = (idTeam) => {
  return (dispatch, getState) => {
    dispatch(startPlayersFetch());

    const config = {
      timeout: 1000,
      method: 'get', // default
      responseType: 'json', // default
      headers: {'X-Auth-Token': 'f4d452d5a6ca4a7c99f84b5b99ba63c0'},
      url: `http://api.football-data.org/v1/teams/${idTeam}/players`
    };
    var self = this;
    const reqPlayers = axios(config);

    axios.all([reqPlayers, fetchTeam(idTeam)])
    .then(axios.spread(function (players, team) {
      dispatch(completePlayersFetch(players.data.players, team.data.name));
    }));
  }

}
