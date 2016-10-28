var actionTypes = require('../constants/actionTypes');

function addLavoro(newLavoro) {
  return {
    type: actionTypes.ADD_LAVORO,
    lavoro: newLavoro
  };
};

module.exports = addLavoro;
