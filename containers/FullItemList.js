import { connect } from 'react-redux'
import { includeElements, excludeElements } from '../actions'
import ItemList from '../components/ItemList'
import { getElementsForModule } from '../selectors/index'

/*
An Item is anything that has a @ident in ODD and belongs to a module. Namely:
- elements
- classes
- datatypes
- macros
*/

const mapStateToProps = (state) => {
  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.localsource.isFetching) {
      const odd = state.odd.customization.json

      // If a filterTerm is set, use it to filter results
      const filter = state.ui.filterTerm ? state.ui.filterTerm : false

      const selectedModules = Object.keys(odd).reduce((acc, nodeId)=>{
        if (odd[nodeId].name === 'moduleRef') {
          acc.push(odd[nodeId]['@'].key)
        }
        return acc
      }, [])

      const modules = state.odd.localsource.json.modules.map(module => {
        let selected = false
        if (selectedModules.indexOf(module.ident) > -1) {
          selected = true
        }
        return Object.assign({}, module,
          {selected: selected}
        )
      })

      let elements = []
      for (const module of modules) {
        elements = elements.concat(getElementsForModule(state.odd,
          {module: module.ident, module_selected: module.selected,
            props: {visible: true}
          }))
      }

      // When filtering, determine whether elements are visible
      if (filter) {
        elements = elements.map(el => {
          if (el.ident.toLowerCase().match(filter.toLowerCase())) {
            el.visible = true
          } else {
            el.visible = false
          }
          return el
        })
      }

      // Finally, sort alphabetically
      elements.sort((a, b) => {
        if (a.ident.toLowerCase() > b.ident.toLowerCase()) {
          return 1
        } else {
          return (b.ident.toLowerCase() > a.ident.toLowerCase()) ? -1 : 0
        }
      })

      return {elements}
    } else return {elements: []}
  } else return {elements: []}
  // else return {elements: [], classes: [], datatypes: [], macros: []}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemChange: (name, module, selected) => {
      if (selected) {
        dispatch(excludeElements([name], module))
      } else {
        dispatch(includeElements([name], module))
      }
    }
  }
}

const FullItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default FullItemList
