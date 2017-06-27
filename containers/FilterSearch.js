import { connect } from 'react-redux'
import { setFilterTerm } from '../actions/interface'
import FilterSearchBar from '../components/FilterSearchBar'

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (term) => {
      dispatch(setFilterTerm(term))
    }
  }
}

const FilterSearch = connect(
  mapDispatchToProps
)(FilterSearchBar)

export default FilterSearch
