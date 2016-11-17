import { combineReducers } from 'redux';
import {
  SELECT_ODD, REQUEST_ODD, RECEIVE_ODD, REQUEST_P5, RECEIVE_P5//, SET_COMPILED_ODD
} from '../actions'
import {
  INCLUDE_MODULES
} from '../actions/ODDmodules'
import includedModules from './ODDmodules';
import traverse from 'traverse'

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
        xml: action.xml,
        json: action.json,
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

function p5(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case REQUEST_P5:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_P5:
      return Object.assign({}, state, {
        isFetching: false,
        xml: action.xml,
        json: action.json,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function receivedP5(state = { }, action) {
  switch (action.type) {
    case RECEIVE_P5:
    case REQUEST_P5:
      return Object.assign({}, state,
        p5(state[action.odd], action)
      )
    default:
      return state
  }
}

// function parseOdd(state = {}, action) {
//   switch (action.type) {
//     case SET_COMPILED_ODD:
//       return Object.assign({}, state, {
//         data: action.odd
//       })
//     default:
//       return state
//   }
// }

// function compiledOdd(state = { }, action) {
//   switch (action.type) {
//     case SET_COMPILED_ODD:
//       return Object.assign({}, state,
//         parseOdd(state[action.odd], action)
//       )
//     case INCLUDE_MODULES:
//        traverse(state.data).forEach(function (x) {
//           if (this.key == "moduleSpec") {
//             // Find all moduleSpecs, when we find a match to any in the given list (action.modules), mark it as selected
//             x.forEach(function(node){
//                 console.log(action.modules.indexOf(node.$.ident))
//             })
//           }
//         })
//     default:
//       return state
//   }
// }

const romajsApp = combineReducers({
  selectedOdd,
  receivedOdd,
  localsource : receivedP5,
})

export default romajsApp;
