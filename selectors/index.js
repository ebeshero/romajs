import { createSelector } from 'reselect'
import traverse from 'traverse'

const getCustomization = (state) => state.odd.customization.json
const getLocalSourceElements = (state) => state.odd.localsource.json.members

export const getElementsForModule = (state, params) => {
  let poo = createSelector([getCustomization, getLocalSourceElements],
                  (customization, localSourceElements) => {
    let includedElements = []
    let excludedElements = []

    // Populate from moduleRef
    traverse(customization)
      .map(function (x) {
        if (this.key == "moduleRef") {
          for (let mr of x) {
            if (mr.$.key == params.module) {
              if (mr.$.except) {
                 excludedElements = excludedElements.concat((mr.$.except).split(" "))
              }
              else if (mr.$.include) {
                 includedElements = includedElements.concat((mr.$.include).split(" "))
              }
              // when neither attributes are present, all elements are included
              else {
                includedElements = "all"
              }
            }
          }
        }
      })

    // Populate from elementRef
    traverse(customization)
      .map(function (x) {
        if (this.key == "elementRef") {
          for (let er of x) {
            includedElements.push(er.$.key)
          }
        }
      })

    // from elementSpec[@mode='delete']
    traverse(customization)
      .map(function (x) {
        if (this.key == "elementSpec") {
          for (let es of x) {
            if (es.$.mode == "delete") {
              excludedElements.push(es.$.ident)
            }
          }
        }
      })

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
          {selected: selected}
        )
        acc.push(element)
      }
      return acc
    }, [])

    return elements

  })
  return poo(state)
}

export default getElementsForModule
