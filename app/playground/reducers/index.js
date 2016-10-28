var combineReducers = require('redux').combineReducers;
var reducer1 = require('./reducers1');
var reducer2 = require('./reducers2');

module.exports = combineReducers({persona: reducer1, lavoro: reducer2});
