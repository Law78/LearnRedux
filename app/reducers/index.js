var nextHobbyId = 0;
var nextMovieId = 0;

export var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      action.funcAsync();
      return action.name
    default:
      return state
  }
};

export var hobbiesReducer = (state = [], action) => {
    switch(action.type){
    case 'ADD_HOBBY':
      return [...state, {
        hobby: action.hobby,
        id: nextHobbyId++
      }];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

export var moviesReducer = (state = [], action) => {
    switch(action.type){
    case 'ADD_MOVIE':
      return [...state, {
        title: action.title,
        genre: action.genre,
        id: nextMovieId++
      }];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default: return state;

  }
}

// Map Reducer e Action Generators
export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch(action.type){
    case 'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
}

export var footballersReducer = (state = {isFetching: false, players: undefined, error: undefined}, action) => {
  switch(action.type){
    case 'START_PLAYERS_FETCH':
      return {
        isFeching: true,
        players: undefined // Reset eventual previous data
      };
    case 'COMPLETE_PLAYERS_FETCH':
      return {
        isFetching: false,
        team: action.team,
        players: action.players // Get data from action
      };
    case 'ERROR_PLAYERS_FETCH':
      return {
        isFetching: false,
        error: action.error,
        players: undefined
      };
    default:
      return state;
  }
};
