import { combineReducers } from 'redux';
import {
  SELECT_ODD, REQUEST_ODD, RECEIVE_ODD, REQUEST_P5, RECEIVE_P5,
  INCLUDE_MODULES, EXCLUDE_MODULES, INCLUDE_ELEMENTS, EXCLUDE_ELEMENTS
} from '../actions'

// Helper functions
let getCurrentModules = function(state='') {
  // Get the keys of current moduleRefs
    let odd = state.customization.json
    return Object.keys(odd).reduce((acc, node_id)=>{
      if (odd[node_id].name == "moduleRef") {
        acc.push(odd[node_id]["@"]["key"])
      }
      return acc
    }, [])
}

let generateUUID = function () {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
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
  let currentModules, odd, schemaSpec
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
      odd = state.customization.json

      // find (first) schemaSpec first, then loop on modules to include
      for (let node_id of Object.keys(odd)) {
        let node = odd[node_id]
        if (node.name == "schemaSpec" && !schemaSpec) {
          schemaSpec = node_id
          break;
        }
      }

      for (module of modulesToInclude) {
        // Create a new node and add to parent
        let id = ">e" + generateUUID()
        let new_node = {
          name : "moduleRef",
          "@" : {
            key : module
          },
          parent: schemaSpec
        }
        odd[id] = new_node
        odd[schemaSpec].children.unshift(id)
      }
      // Update state
      if (modulesToInclude.length > 0) {
        return Object.assign({}, state,
          updateOdd(state[customization], odd)
        )
      }
      else {
        return state
      }
    case EXCLUDE_MODULES:
      odd = state.customization.json
      // Remove moduleRefs

      for (let node_id of Object.keys(odd)) {
        let node = odd[node_id]
        if (node.name == "moduleRef" && action.modules.indexOf(node["@"].key) > -1) {
          // remove from parent
          let parent = odd[node.parent]
          parent.children.splice(parent.children.indexOf(node_id), 1)
          delete odd[node_id]
        }
      }

      // Update state
      return Object.assign({}, state,
        updateOdd(state[customization], odd)
      )

    case INCLUDE_ELEMENTS:

      odd = state.customization.json
      let matchingMR = false
      schemaSpec = ""

      for (let node_id of Object.keys(odd)) {
        let node = odd[node_id]
        if (node.name == "moduleRef" && node["@"].key == action.module) {
          matchingMR = true
          // try to remove from @except
          if (node["@"].except){
            for (let el of action.elements) {
              let excludes =node["@"].except.split(" ")
              let el_pos = excludes.indexOf(el)
              if (el_pos > -1) {
                excludes.splice(el_pos, 1)
                if (excludes.length > 0) {
                  node["@"].except = excludes.join(" ")
                }
                else {
                  // remove @except last element in @except was removed.
                  delete node["@"].except
                }
              }
            }
          }
          else if (node["@"].include) {
            // if there's @include, add the element to the list
            let includes = new Set((node["@"].include || "").split(" "))
            includes.add(action.elements)
            node["@"].include = Array.from(includes).join(" ")
          }
          else {
            // noop
          }
        }
        // remove matching elementSpec[@mode='delete']
        else if (node.name == "elementSpec") {
          if (action.elements.indexOf(node["@"].ident) > -1 && node["@"].mode == "delete") {
            delete node["@"].mode
          }
        }
        // store schemaSpec id
        else if (node.name == "schemaSpec") {
          if (!schemaSpec) schemaSpec = node_id
        }
      }

      if (!matchingMR){
        //create new moduleref
        let id = ">e" + generateUUID()
        let new_node = {
          name : "moduleRef",
          "@" : {
            key : action.module,
            include : action.elements.join(" ")
          },
          parent: schemaSpec
        }
        odd[id] = new_node
        odd[schemaSpec].children.unshift(id)
      }

      // Update state
      return Object.assign({}, state,
        updateOdd(state[customization], odd)
      )

      case EXCLUDE_ELEMENTS:

        odd = state.customization.json

        for (let node_id of Object.keys(odd)) {
          let node = odd[node_id]
          if (node.name == "moduleRef" && node["@"].key == action.module){
            if (node["@"].include) {
              for (let el of action.elements) {
                let includes = node["@"].include.split(" ")
                let el_pos = includes.indexOf(el)
                if (el_pos > -1) {
                  includes.splice(el_pos, 1)
                  if (includes.length > 0) {
                    node["@"].include = includes.join(" ")
                  }
                  else {
                    // remove module if the last element in @include was excluded.
                    let parent = odd[node.parent]
                    parent.children.splice(parent.children.indexOf(node_id), 1)
                    delete odd[node_id]
                  }
                }
              }
            }
            else {
              // otherwise add to @except
              let excludes = new Set((node["@"].except || "").split(" "))
              let except = new Set([...excludes, ...new Set(action.elements)])
              node["@"].except = Array.from(except).join(" ")
            }
          }
          // remove matching elementRefs is present
          else if (node.name == "elementRef" && action.elements.indexOf(node["@"].key) > -1) {
            let parent = odd[node.parent]
            parent.children.splice(parent.children.indexOf(node_id), 1)
            delete odd[node_id]
          }
          // finally look for a matching elementSpec
          // and switch it to @mode='delete'
          else if (node.name == "elementSpec") {
            if (action.elements.indexOf(node["@"].ident) > -1) {
              node["@"].mode = "delete"
            }
          }
        }

        // Update state
        return Object.assign({}, state,
          updateOdd(state[customization], odd)
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
