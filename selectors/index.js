import { createSelector } from 'reselect'

const getCustomization = (state) => state.customization.json
const getLocalSourceElements = (state) => state.localsource.json.members

export const getElementsForModule = (state, params) => {
  const sel = createSelector([getCustomization, getLocalSourceElements], (customization, localSourceElements) => {
    let includedElements = []
    let excludedElements = []

    // Populate from moduleRef
    for (const nodeId of Object.keys(customization)) {
      const node = customization[nodeId]
      if (node.name === 'moduleRef' && node['@'].key === params.module) {
        if (node['@'].except) {
          excludedElements = excludedElements.concat((node['@'].except).split(' '))
        } else if (node['@'].include) {
          includedElements = includedElements.concat((node['@'].include).split(' '))
        } else {
          // when neither attributes are present, all elements are included
          includedElements = 'all'
        }
      } else if (node.name === 'elementRef' && includedElements !== 'all') {
        // Populate from elementRef
        includedElements.push(node['@'].key)
      } else if (node.name === 'elementSpec' && node['@'].mode === 'delete') {
        // from elementSpec[@mode='delete']
        excludedElements.push(node['@'].ident)
      }
    }

    // Go through all elements for this module and determine whether
    // they're selected or not.
    const elements = localSourceElements.reduce((acc, member) => {
      if (member.type === 'elementSpec' && member.module === params.module) {
        let selected = params.module_selected
        if (includedElements === 'all') {
          selected = true
        } else {
          if (includedElements.length > 0) {
            selected = includedElements.indexOf(member.ident) > -1 ? true : false
          }
        }
        if (excludedElements.indexOf(member.ident) > -1) {
          selected = false
        }
        const element = Object.assign({}, member,
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
