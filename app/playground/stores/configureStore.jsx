var { createStore, applyMiddleware } = require('redux');
var rootReducer = require('../reducers');
var createLogger = require('redux-logger');

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}


module.exports = configureStore;
