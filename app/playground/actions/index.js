/*
var changeName = require('./action1');
var changeSurname = require('./action2');

module.exports.changeName = changeName;
module.exports.changeSurname = changeSurname;
*/

import { changeName } from './changeName';
var {changeSurname}= require('./changeSurname');
//var addLavoro = require('./addLavoro');
import addLavoro from './addLavoro';

/*export {
  changeName,
  changeSurname,
  addLavoro
};
*/

module.exports = {changeName, changeSurname, addLavoro}
