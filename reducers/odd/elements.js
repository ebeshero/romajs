import {
  UPDATE_ELEMENT_DOCS
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
          flattenXML(`<elementSpec ident="${action.element}"><${action.docsEl}>${action.content}</${action.docsEl}></elementSpec>`))
      }
      return Object.assign({}, state,
        updateOdd(state[customization], custom)
      )
    default:
      return state
  }
}
