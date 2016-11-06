import { combineReducers } from 'redux';
import {
  SELECT_ODD, REQUEST_ODD, RECEIVE_ODD, SET_COMPILED_ODD
} from '../actions'
// import elements from './elements';

function selectedOdd(state = '', action) {
  switch (action.type) {
    case SELECT_ODD:
      return action.odd_url
    default:
      return state
  }
}

function odd(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case REQUEST_ODD:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ODD:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.odd,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function receivedOdd(state = { }, action) {
  switch (action.type) {
    case RECEIVE_ODD:
    case REQUEST_ODD:
      return Object.assign({}, state,
        odd(state[action.odd], action)
      )
    default:
      return state
  }
}

function parseOdd(state = {}, action) {
  switch (action.type) {
    case SET_COMPILED_ODD:
      return Object.assign({}, state, {
        data: action.odd
      })
    default:
      return state
  }
}

function compiledOdd(state = { }, action) {
  switch (action.type) {
    case SET_COMPILED_ODD:
      return Object.assign({}, state,
        parseOdd(state[action.odd], action)
      )
    default:
      return state
  }
}

const romajsApp = combineReducers({
  selectedOdd,
  receivedOdd,
  compiledOdd
})

export default romajsApp;
