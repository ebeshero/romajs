import {
  SELECT_ODD, REQUEST_ODD, RECEIVE_ODD, PARSE_ODD, REQUEST_P5, RECEIVE_P5,
  INCLUDE_MODULES, EXCLUDE_MODULES, INCLUDE_ELEMENTS, EXCLUDE_ELEMENTS
} from '../actions'
import {getElementsForModule} from '../selectors'

// Helper functions
function getCurrentModules(state = '') {
  // Get the keys of current moduleRefs
  const custom = state.customization.json
  return Object.keys(custom).reduce((acc, nodeId)=>{
    if (custom[nodeId].name === 'moduleRef') {
      acc.push(custom[nodeId]['@'].key)
    }
    return acc
  }, [])
}

function generateUUID() {
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now() // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
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

function updateOdd(state = {
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
  let currentModules
  let custom
  let schemaSpec
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
    case INCLUDE_MODULES:
      currentModules = getCurrentModules(state)
      // Find modules that need inclusion
      const modulesToInclude = action.modules.filter(x => (currentModules.indexOf(x) === -1))
      // Create elements
      custom = state.customization.json

      // find (first) schemaSpec first, then loop on modules to include
      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        if (node.name === 'schemaSpec' && !schemaSpec) {
          schemaSpec = nodeId
          break
        }
      }

      for (const module of modulesToInclude) {
        // Create a new node and add to parent
        const id = '>e' + generateUUID()
        const newNode = {
          name: 'moduleRef',
          '@': {
            key: module
          },
          parent: schemaSpec,
          children: []
        }
        custom[id] = newNode
        custom[schemaSpec].children.unshift(id)
      }
      // Update state
      if (modulesToInclude.length > 0) {
        return Object.assign({}, state,
          updateOdd(state[customization], custom)
        )
      } else {
        return state
      }
    case EXCLUDE_MODULES:
      custom = state.customization.json

      // Remove moduleRefs
      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        if (node.name === 'moduleRef' && action.modules.indexOf(node['@'].key) > -1) {
          // remove from parent
          const parent = custom[node.parent]
          parent.children.splice(parent.children.indexOf(nodeId), 1)
          delete custom[nodeId]
        }
      }

      // Update state
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )

    case INCLUDE_ELEMENTS:

      custom = state.customization.json
      let matchingMR = false
      schemaSpec = ''

      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        if (node.name === 'moduleRef' && node['@'].key === action.module) {
          matchingMR = true
          // try to remove from @except
          if (node['@'].except) {
            for (const el of action.elements) {
              const excludes = node['@'].except.split(' ')
              const elPos = excludes.indexOf(el)
              if (elPos > -1) {
                excludes.splice(elPos, 1)
                if (excludes.length > 0) {
                  node['@'].except = excludes.join(' ')
                } else {
                  // remove @except last element in @except was removed.
                  delete node['@'].except
                }
              }
            }
          } else if (node['@'].include) {
            // if there's @include, add the element to the list
            const includes = new Set((node['@'].include || '').split(' '))
            includes.add(action.elements)
            node['@'].include = Array.from(includes).join(' ')
          } else {
            // noop
          }
        } else if (node.name === 'elementSpec') {
          // remove matching elementSpec[@mode='delete']
          if (action.elements.indexOf(node['@'].ident) > -1 && node['@'].mode === 'delete') {
            delete node['@'].mode
          }
        } else if (node.name === 'schemaSpec') {
          // store schemaSpec id
          if (!schemaSpec) schemaSpec = nodeId
        }
      }

      if (!matchingMR) {
        // create new moduleref
        const id = '>e' + generateUUID()
        const newNode = {
          name: 'moduleRef',
          '@': {
            key: action.module,
            include: action.elements.join(' ')
          },
          parent: schemaSpec,
          children: []
        }
        custom[id] = newNode
        custom[schemaSpec].children.unshift(id)
      }

      // Update state
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )

    case EXCLUDE_ELEMENTS:

      custom = state.customization.json

      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        if (node.name === 'moduleRef' && node['@'].key === action.module) {
          if (node['@'].include) {
            for (const el of action.elements) {
              const includes = node['@'].include.split(' ')
              const elPos = includes.indexOf(el)
              if (elPos > -1) {
                includes.splice(elPos, 1)
                if (includes.length > 0) {
                  node['@'].include = includes.join(' ')
                } else {
                  // remove module if the last element in @include was excluded.
                  const parent = custom[node.parent]
                  parent.children.splice(parent.children.indexOf(nodeId), 1)
                  delete custom[nodeId]
                }
              }
            }
          } else {
            // otherwise add to @except
            const excludes = new Set((node['@'].except || '').split(' '))
            excludes.delete('')
            const except = new Set([...excludes, ...new Set(action.elements)])
            node['@'].except = Array.from(except).join(' ')
            // remove module if all elements are excluded
            const allEls = getElementsForModule(state, {module: action.module})
            if (allEls.length === except.size) {
              const parent = custom[node.parent]
              parent.children.splice(parent.children.indexOf(nodeId), 1)
              delete custom[nodeId]
            }
          }
        } else if (node.name === 'elementRef' && action.elements.indexOf(node['@'].key) > -1) {
          // remove matching elementRefs is present
          const parent = custom[node.parent]
          parent.children.splice(parent.children.indexOf(nodeId), 1)
          delete custom[nodeId]
        } else if (node.name === 'elementSpec') {
          // finally look for a matching elementSpec
          // and switch it to @mode='delete'
          if (action.elements.indexOf(node['@'].ident) > -1) {
            node['@'].mode = 'delete'
          }
        }
      }
      // Update state
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )
    default:
      return state
  }
}
