import { combineReducers } from 'redux'
import { selectedOdd, processOdd } from  './oddOperations'
import { routerReducer } from 'react-router-redux'
import { ui } from  './interface'

const romajsApp = combineReducers({
  selectedOdd,
  odd: processOdd,
  ui,
  router: routerReducer
})

export default romajsApp
