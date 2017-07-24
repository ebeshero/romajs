import {
  SELECT_ODD, REQUEST_ODD, RECEIVE_ODD, PARSE_ODD, REQUEST_P5, RECEIVE_P5
} from '../actions'
import oddModules from './odd/modules'
import oddElements from './odd/elements'

// Helper functions
export function getCurrentModules(state = '') {
  // Get the keys of current moduleRefs
  const custom = state.customization.json
  return Object.keys(custom).reduce((acc, nodeId)=>{
    if (custom[nodeId].name === 'moduleRef') {
      acc.push(custom[nodeId]['@'].key)
    }
    return acc
  }, [])
}

export function selectedOdd(state = '', action) {
  switch (action.type) {
    case SELECT_ODD:
      return action.oddUrl
    default:
      return state
  }
}

function p5(state = {
  localsource: { isFetching: false }
}, action) {
  switch (action.type) {
    case REQUEST_P5:
      return Object.assign({}, state, {
        localsource: {isFetching: true}
      })
    case RECEIVE_P5:
      return Object.assign({}, state, {
        localsource: {
          isFetching: false,
          xml: action.xml,
          json: action.json,
          lastUpdated: action.receivedAt
        }
      })
    default:
      return state
  }
}

function customization(state = {
  customization: { isFetching: false }
}, action) {
  switch (action.type) {
    case PARSE_ODD:
      return Object.assign({}, state, {
        customization: {
          isFetching: false,
          xml: action.xml,
          json: action.json
        }
      })
    case REQUEST_ODD:
      return Object.assign({}, state, {
        customization: {isFetching: true }
      })
    case RECEIVE_ODD:
      return Object.assign({}, state, {
        customization: {
          isFetching: false,
          xml: action.xml,
          json: action.json,
          lastUpdated: action.receivedAt
        }
      })
    default:
      return state
  }
}

export function updateOdd(state = {
  customization: {isFetching: false}
}, json) {
  return Object.assign({}, state, {
    customization: {
      isFetching: false,
      json
    }
  })
}

export function processOdd(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ODD:
    case REQUEST_ODD:
    case PARSE_ODD:
      return Object.assign({}, state,
        customization(state[action.odd], action)
      )
    case RECEIVE_P5:
    case REQUEST_P5:
      return Object.assign({}, state,
        p5(state[action.odd], action)
      )
    default:
      oddModules(state, action)
      oddElements(state, action)
  }
  return state
}
