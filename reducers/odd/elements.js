import {
  UPDATE_ELEMENT_DOCS, ELEMENT_ADD_MEMBEROF
} from '../../actions/elements'
import {appendFragmentTo} from '../../utils/xmljson'
import {customization, updateOdd} from '../oddOperations'
import {flattenXML} from 'squash-xml-json'

export default function oddElements(state, action) {
  let custom
  let schemaSpec
  switch (action.type) {
    case UPDATE_ELEMENT_DOCS:
      custom = state.customization.json
      let hasElementSpec = false
      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        // Update elementSpec
        if (node.name === 'elementSpec' && node['@'].ident === action.element) {
          hasElementSpec = true
          node.children = node.children.reduce((acc, child) => {
            if (custom[child].name === action.docsEl) {
              // This can be done better
              delete custom[child]
            } else {
              acc.push(child)
            }
            return acc
          }, [])
          appendFragmentTo(custom, node.id,
            flattenXML(`<${action.docsEl}>${action.content}</${action.docsEl}>`))
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
          flattenXML(`<elementSpec ident="${action.element}" mode="change">
            <${action.docsEl}>${action.content}</${action.docsEl}>
          </elementSpec>`))
      }
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )
    case ELEMENT_ADD_MEMBEROF:
      custom = state.customization.json
      hasElementSpec = false
      for (const nodeId of Object.keys(custom)) {
        const node = custom[nodeId]
        // Update elementSpec
        if (node.name === 'elementSpec' && node['@'].ident === action.element) {
          hasElementSpec = true
          const classes = node.children.filter((child)=>{
            return custom[child].name === 'classes'
          })
          if (classes.length === 0) {
            appendFragmentTo(custom, node.id,
              flattenXML(`<classes><memberOf key="${action.className}"/></classes>`))
          } else {
            appendFragmentTo(custom, classes[0],
              flattenXML(`<memberOf key="${action.className}"/>`))
          }
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
          flattenXML(`<elementSpec ident="${action.element}" mode="change">
            <classes><memberOf key="${action.className}"/></classes>
          </elementSpec>`))
      }
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )
    default:
      return state
  }
}
