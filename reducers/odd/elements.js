import {
  UPDATE_ELEMENT_ALTIDENT, UPDATE_ELEMENT_GLOSS
  // , UPDATE_ELEMENT_DESC
} from '../../actions/elements'
import {appendFragmentTo} from '../../utils/xmljson'
import {customization, updateOdd} from '../oddOperations'
import {flattenXML} from 'squash-xml-json'

export default function oddElements(state, action) {
  let custom
  let schemaSpec
  switch (action.type) {
    case UPDATE_ELEMENT_ALTIDENT:
      custom = state.customization.json
      let hasElementSpec = false
      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        // Update elementSpec
        if (node.name === 'elementSpec' && node['@'].ident === action.element) {
          hasElementSpec = true
          node.children = node.children.reduce((acc, child) => {
            if (custom[child].name === 'altIdent') {
              delete custom[child]
            } else {
              acc.push(child)
            }
            return acc
          }, [])
          appendFragmentTo(custom, node.id,
            flattenXML(`<altIdent>${action.altIdent}</altIdent>`))
          break
        }
      }
      // Create elementSpec
      if (!hasElementSpec) {
        schemaSpec = ''
        // find (first) schemaSpec first, then loop on modules to include
        for (const nodeId of Object.keys(custom)) {
          const node = custom[nodeId]
          if (node.name === 'schemaSpec' && !schemaSpec) {
            schemaSpec = nodeId
            break
          }
        }
        appendFragmentTo(custom, schemaSpec,
          flattenXML(`<elementSpec ident="${action.element}"><altIdent>${action.altIdent}</altIdent></elementSpec>`))
      }
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )
    case UPDATE_ELEMENT_GLOSS:
      custom = state.customization.json
      hasElementSpec = false
      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        // Update elementSpec
        if (node.name === 'elementSpec' && node['@'].ident === action.element) {
          hasElementSpec = true
          node.children = node.children.reduce((acc, child) => {
            if (custom[child].name === 'gloss') {
              delete custom[child]
            } else {
              acc.push(child)
            }
            return acc
          }, [])
          appendFragmentTo(custom, node.id,
            flattenXML(`<gloss>${action.gloss}</gloss>`))
          break
        }
      }
      // Create elementSpec
      if (!hasElementSpec) {
        schemaSpec = ''
        // find (first) schemaSpec first, then loop on modules to include
        for (const nodeId of Object.keys(custom)) {
          const node = custom[nodeId]
          if (node.name === 'schemaSpec' && !schemaSpec) {
            schemaSpec = nodeId
            break
          }
        }
        appendFragmentTo(custom, schemaSpec,
          flattenXML(`<elementSpec ident="${action.element}"><gloss>${action.gloss}</gloss></elementSpec>`))
      }
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )
    default:
      return state
  }
}
