import { connect } from 'react-redux'
import { includeModules, excludeModules } from '../actions'
import Module from '../components/Module'

const mapStateToProps = (state, params) => {
  const empty = {selected: false, ident: ''}

  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.localsource.isFetching) {
      const odd = state.odd.customization.json

      // determine if it is selected
      const selected = Object.keys(odd).filter(nodeId => {
        return odd[nodeId].name === 'moduleRef' && odd[nodeId]['@'].key === params.ident
      }).length > 0 ? true : false

      // If we need to pass more state data about the module, use:
      // let module = state.odd.localsource.json.modules.filter(module => {
      //   return module.ident === params.ident
      // })[0]

      return {
        selected,
        ident: params.ident
      }
    } else return empty
  } else return empty
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, selected) => {
      if (selected) {
        dispatch(excludeModules([name]))
      } else {
        dispatch(includeModules([name]))
      }
    }
  }
}

const SingleModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(Module)

export default SingleModule
