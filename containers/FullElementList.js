import { connect } from 'react-redux'
import { includeElements, excludeElements } from '../actions'
import ElementList from '../components/ElementList'
import getElementsForModule from '../selectors'

const mapStateToProps = (state, params) => {
  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.localsource.isFetching) {
      return {
        elements: getElementsForModule(state.odd, params)
      }
    } else return {elements: []}
  } else return {elements: []}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onElementChange: (name, module, selected) => {
      if (selected) {
        dispatch(excludeElements([name], module))
      } else {
        dispatch(includeElements([name], module))
      }
    }
  }
}

const FullElementList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementList)

export default FullElementList
