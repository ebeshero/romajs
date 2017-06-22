import { createSelector } from 'reselect'
import {flattenXML, hydrateXML} from 'squash-xml-json';

const getCustomization = (state) => state.odd.customization.json
const getLocalSourceElements = (state) => state.odd.localsource.json.members

export const getElementsForModule = (state, params) => {
  let sel = createSelector([getCustomization, getLocalSourceElements],
                  (customization, localSourceElements) => {
    let includedElements = []
    let excludedElements = []

    // Populate from moduleRef
    for (let node_id of Object.keys(customization)) {
      let node = customization[node_id]
      if (node.name == "moduleRef" && node["@"].key == params.module) {
        if (node["@"].except) {
          excludedElements = excludedElements.concat((node["@"].except).split(" "))
        }
        else if (node["@"].include) {
          includedElements = includedElements.concat((node["@"].include).split(" "))
        }
        // when neither attributes are present, all elements are included
        else {
          includedElements = "all"
        }
      }
      // Populate from elementRef
      else if (node.name == "elementRef" && includedElements != "all") {
        includedElements.push(node["@"].key)
      }
      // from elementSpec[@mode='delete']
      else if (node.name == "elementSpec" && node["@"].mode == "delete") {
        excludedElements.push(node["@"].ident)
      }
    }

    // Go through all elements for this module and determine whether
    // they're selected or not.
    let elements = localSourceElements.reduce((acc, member) => {
      if (member.type == "elementSpec" && member.module == params.module) {
        let selected = params.module_selected
        if (includedElements == "all") {
          selected = true
        }
        else {
          if (includedElements.length > 0) {
            selected = includedElements.indexOf(member.ident) > -1 ? true : false
          }
        }
        if (excludedElements.indexOf(member.ident) > -1) {
          selected = false
        }
        let element = Object.assign({}, member,
          params.props, {selected: selected}
        )
        acc.push(element)
      }
      return acc
    }, [])

    return elements

  })
  return sel(state)
}

export default getElementsForModule
