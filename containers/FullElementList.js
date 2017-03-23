import { connect } from 'react-redux'
import { includeElements, excludeElements,
         includeModules, excludeModules } from '../actions'
import ElementList from '../components/ElementList'
import getElementsForModule from '../selectors'
import traverse from 'traverse'

const mapStateToProps = (state, params) => {
  // console.log(state)

  return {
    elements: getElementsForModule(state, params)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onElementClick: (name, module, selected) => {
      if (selected) {
        dispatch(excludeElements([name], module))
      }
      else {
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
