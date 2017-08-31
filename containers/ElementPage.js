import { connect } from 'react-redux'
import Element from '../components/elements'
import { push } from 'react-router-redux'
import { getElementDataByIdent } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  if (state.odd.customization && state.odd.localsource) {
    if (!state.odd.localsource.isFetching) {
      return {
        element: getElementDataByIdent(state.odd, ownProps.match.params.el),
        oddLoaded: true
      }
    } else {
      return {
        oddLoaded: false
      }
    }
  } else {
    return {
      oddLoaded: false
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return { redirect: () => dispatch(push('/')) }
}

const ElementPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Element)

export default ElementPage
