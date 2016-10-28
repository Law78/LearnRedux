import * as actionTypes from '../constants/actionTypes';

var reducer = (state = {}, action) => {
  console.log('New Action', action);
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return changeName(state, action);
    case actionTypes.CHANGE_SURNAME:
      return changeSurname(state, action);
  }
  return state;
};

function changeName(state, action) {

  const { name } = action.persona;
  return { ...state, name };
}

function changeSurname(state, action) {
  const { surname } = action.persona;
  return { ...state, surname };
}

module.exports = reducer;
