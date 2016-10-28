var actionTypes = require('../constants/actionTypes');

var reducer = (state = [], action) => {
  console.log('New Action', action);
  switch (action.type) {
    case actionTypes.ADD_LAVORO:
      const { lavoro } = action;
      return [ ...state, lavoro ];
  }
  //console.log('REDUCERS2');
  return state;
};

function addLavoro(state, action) {
  const { lavoro } = action;
  return [ ...state, lavoro ];

}

module.exports = reducer;
