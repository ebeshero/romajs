import React, { PropTypes } from 'react'

const FilterSearchBar = ({ onInputChange }) => (
  <span className="mdl-chip mdl-chip--deletable romajs-searchbar">
    <span className="mdl-chip__text">
      <div className="mdc-textfield">
        <input type="text" className="mdc-textfield__input"
          id="search-textfield" placeholder="filter items"
          onChange={(e)=>{onInputChange(e.target.value)}}/>
      </div>
    </span>
    <button type="button" className="mdl-chip__action"><i className="material-icons">search</i></button>
  </span>
)

FilterSearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired
}

export default FilterSearchBar
