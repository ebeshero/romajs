import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FilterSearchBar extends Component {
  render() {
    return (
      <span className="mdl-chip mdl-chip--deletable romajs-searchbar">
        <span className="mdl-chip__text">
          <div className="mdc-textfield">
            <input type="text" className="mdc-textfield__input"
              id="search-textfield" placeholder="filter items"
              onChange={(e)=>{this.props.setFilterTerm(e.target.value)}}/>
          </div>
        </span>
        <button type="button" className="mdl-chip__action"><i className="material-icons">search</i></button>
      </span>
    )
  }
}

FilterSearchBar.propTypes = {
  setFilterTerm: PropTypes.func.isRequired
}
