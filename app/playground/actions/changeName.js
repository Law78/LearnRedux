import * as actionTypes from '../constants/actionTypes';

export function changeName(name) {
  return {
    type: actionTypes.CHANGE_NAME,
    persona: {
      name
    }
  };
};
