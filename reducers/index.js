import { combineReducers } from 'redux'
import { selectedOdd, processOdd } from  './oddOperations'
import { ui } from  './interface'

const romajsApp = combineReducers({
  selectedOdd,
  odd: processOdd,
  ui
})

export default romajsApp
