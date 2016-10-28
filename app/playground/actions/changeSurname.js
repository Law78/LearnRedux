import * as actionTypes from '../constants/actionTypes';

export function changeSurname(surname) {
  return {
    type: actionTypes.CHANGE_SURNAME,
    persona: {
      surname
    }
  };
};
