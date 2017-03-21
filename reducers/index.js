import { combineReducers } from 'redux';
import {
  SELECT_ODD, REQUEST_ODD, RECEIVE_ODD, REQUEST_P5, RECEIVE_P5,
  INCLUDE_MODULES, EXCLUDE_MODULES, INCLUDE_ELEMENTS, EXCLUDE_ELEMENTS
} from '../actions'
import traverse from 'traverse'

// Helper functions
let getCurrentModules = function(state='') {
  // Get the keys of current moduleRefs
  return traverse(state.customization.json)
    .reduce(function (acc, x) {
      if (this.key == "moduleRef") acc = x
      return acc
    })
    .reduce(function (acc, x) {
      // NB this key is a TEI attribute, not a traverse.js key.
      acc.push(x.$.key)
      return acc
    }, [])
}

function selectedOdd(state = '', action) {
  switch (action.type) {
    case SELECT_ODD:
      return action.odd_url
    default:
      return state
  }
}

function odd(state = {}, action) {
  let currentModules, updatedOdd
  switch (action.type) {
    case RECEIVE_ODD:
    case REQUEST_ODD:
      return Object.assign({}, state,
        customization(state[action.odd], action)
      )
    case RECEIVE_P5:
    case REQUEST_P5:
      return Object.assign({}, state,
        p5(state[action.odd], action)
      )
    case INCLUDE_MODULES:
      currentModules = getCurrentModules(state)
      // Find modules that need inclusion
      let modulesToInclude = action.modules.filter(x => (currentModules.indexOf(x) == -1))
      // Create elements
      for (module of modulesToInclude) {
        //<moduleRef key="#{module}"/>
        updatedOdd = traverse(state.customization.json)
        .map(function (x) {
          if (this.key == "moduleRef") {
            this.update([...x, {'$': {'key': module}}])
          }
        })
      }
      // Update state
      if (modulesToInclude.length > 0) {
        return Object.assign({}, state,
          updateOdd(state[customization], updatedOdd)
        )
      }
      else {
        return state
      }
    case EXCLUDE_MODULES:
      // Remove elements
      for (module of action.modules) {
        updatedOdd = traverse(state.customization.json)
        .map(function (x) {
          if (this.key == "moduleRef") {
            this.update(x.filter(mr => mr.$.key != module))
          }
        })
      }
      // Update state
      return Object.assign({}, state,
        updateOdd(state[customization], updatedOdd)
      )
    case INCLUDE_ELEMENTS:

      updatedOdd = traverse(state.customization.json)
        .map(function (x) {
          if (this.key == "moduleRef") {
            let updatedRefs = []
            let no_match = true
            for (let mr of x) {
              if (mr.$.key == action.module) {
                no_match = false
                // try to remove from @except
                if (mr.$.except) {
                  for (let el of action.elements) {
                    let excludes = mr.$.except.split(" ")
                    let el_pos = excludes.indexOf(el)
                    if (el_pos > -1) {
                      excludes.splice(el_pos, 1)
                      if (excludes.length > 0) {
                        mr.$.except = excludes.join(" ")
                      }
                      else {
                        // remove @except last element in @except was removed.
                        delete mr.$.except
                      }
                    }
                  }
                }
                else if (mr.$.include) {
                  // if there's @include, add the element to the list
                  let includes = new Set((mr.$.include || "").split(" "))
                  includes.add(action.elements)
                  mr.$.include = Array.from(includes).join(" ")
                }
                else {
                  // noop
                }
              }
              updatedRefs.push(mr)
            }
            // If there are no <moduleRef>s at all
            // Or if there is no matching moduleRef, create one
            if (updatedRefs.length == 0 || no_match) {
                updatedRefs.push({
                  $ : {
                    key : action.module,
                    include : action.elements.join(" ")
                  }
                })
            }
            this.update(updatedRefs)
          }
          // finally remove matching elementSpec[@mode='delete']
          else if (this.key == "elementSpec") {
            let updatedSpecs = []
            for (let el of action.elements) {
              for (let es of x) {
                if (es.$.ident == el && es.$.mode == "delete") {
                  delete es.$.mode
                }
                updatedSpecs.push(es)
              }
            }
            this.update(updatedSpecs)
          }
        })

      // Update state
      return Object.assign({}, state,
        updateOdd(state[customization], updatedOdd)
      )
      case EXCLUDE_ELEMENTS:

        updatedOdd = traverse(state.customization.json)
          .map(function (x) {
            if (this.key == "moduleRef") {
              let updatedRefs = []
              for (let mr of x) {
                if (mr.$.key == action.module) {
                  // try to remove from @include
                  if (mr.$.include) {
                    for (let el of action.elements) {
                      let includes = mr.$.include.split(" ")
                      let el_pos = includes.indexOf(el)
                      if (el_pos > -1) {
                        includes.splice(el_pos, 1)
                        if (includes.length > 0) {
                          mr.$.include = includes.join(" ")
                        }
                        else {
                          // remove module if the last element in @include was excluded.
                          mr.$.toRemove = true
                        }
                      }
                    }
                  }
                  else {
                    // otherwise add to @except
                    let excludes = new Set((mr.$.except || "").split(" "))
                    let except = new Set([...excludes, ...new Set(action.elements)])
                    mr.$.except = Array.from(except).join(" ")
                  }

                }
                if (!mr.$.toRemove) {
                  updatedRefs.push(mr)
                }
              }
              this.update(updatedRefs)
            }
            // remove matching elementRefs is present
            else if (this.key == "elementRef") {
              let updatedRefs = []
              for (let er of x) {
                if (action.elements.indexOf(er.$.key) == -1) {
                  updatedRefs.push(er)
                }
              }
              this.update(updatedRefs)
            }
            // finally look for a matching elementSpec
            // and switch it to @mode='delete'
            else if (this.key == "elementSpec") {
              let updatedSpecs = []
              for (let es of x) {
                if (action.elements.indexOf(es.$.ident) > -1) {
                  es.$.mode = "delete"
                }
                updatedSpecs.push(es)
              }
              this.update(updatedSpecs)
            }
          })

        // Update state
        return Object.assign({}, state,
          updateOdd(state[customization], updatedOdd)
        )
    default:
      return state
  }
}

function updateOdd(state = {
  customization: {isFetching: false}
}, odd) {
  return Object.assign({}, state, {
    customization: {
      isFetching: false,
      json: odd
    }
  })
}

function customization(state = {
  customization: { isFetching: false }
}, action) {
  switch (action.type) {
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

const romajsApp = combineReducers({
  selectedOdd,
  odd
})

export default romajsApp;
