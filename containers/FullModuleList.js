import { connect } from 'react-redux'
import { includeModules, excludeModules } from '../actions'
import ModuleList from '../components/ModuleList'

const mapStateToProps = (state) => {

  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.localsource.isFetching) {
      let odd = state.odd.customization.json

      let selectedModules = Object.keys(odd).reduce((acc, node_id)=>{
        if (odd[node_id].name == "moduleRef") {
          acc.push(odd[node_id]["@"]["key"])
        }
        return acc
      }, [])

      let modules = state.odd.localsource.json.modules.map(module => {
        let selected = false
        if (selectedModules.indexOf(module.ident) > -1) {
          selected = true
        }
        return Object.assign({}, module,
          {selected: selected}
        )
      })
      return {
        modules: modules
      }
    }
    else return {modules: []}

  }
  else return {modules: []}

}

const mapDispatchToProps = (dispatch) => {
  return {
    onModuleChange: (name, selected) => {
      if (selected) {
        dispatch(excludeModules([name]))
      }
      else {
        dispatch(includeModules([name]))
      }
    }
  }
}

const FullModuleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleList)

export default FullModuleList
