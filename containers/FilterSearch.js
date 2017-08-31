import { connect } from 'react-redux'
import { setFilterTerm } from '../actions/interface'
import FilterSearchBar from '../components/FilterSearchBar'

const mapStateToProps = () => { return {} }

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (term) => {
      dispatch(setFilterTerm(term))
    }
  }
}

const FilterSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSearchBar)

export default FilterSearch
