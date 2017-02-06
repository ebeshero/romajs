import { connect } from 'react-redux'
import { includeModules, excludeModules } from '../actions'
import ModuleList from '../components/ModuleList'
import traverse from 'traverse'

const mapStateToProps = (state) => {
  let selectedModules = traverse(state.odd.customization.json)
    .reduce(function (acc, x) {
      if (this.key == "moduleRef") acc = x
      return acc
    })
    .reduce(function (acc, x) {
      // NB this key is a TEI attribute, not a traverse.js key.
      acc.push(x.$.key)
      return acc
    }, [])
  let modules = state.odd.localsource.json.modules.map((module) => {
    if (selectedModules.indexOf(module.ident) > -1) {
      module.selected = true
    }
    else {
      module.selected = false
    }
    return module
  })
  return {
    modules: modules
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModuleClick: (name, selected) => {
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
