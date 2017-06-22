import { combineReducers } from 'redux';
import { selectedOdd, odd } from  './oddOperations'
import { ui } from  './interface'

const romajsApp = combineReducers({
  selectedOdd,
  odd,
  ui
})

export default romajsApp;
