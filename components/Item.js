import React from 'react'
import PropTypes from 'prop-types'
import SingleModule from '../containers/SingleModule'
import { Link } from 'react-router-dom'

const Item = ({ onChange, selected, ident, desc, module }) => (
  <li className="mdc-list-item mdc-elevation--z1">
    <span className="mdc-checkbox">
      <input type="checkbox" id="basic-checkbox" className="mdc-checkbox__native-control"
        checked={selected} onChange={onChange}/>
      <span className="mdc-checkbox__background">
        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <span className="mdc-checkbox__mixedmark"/>
      </span>
    </span>
    <span className="mdc-list-item__text">
      <Link to={'element/' + ident}>{ident}</Link>
      <span className="mdc-list-item__text__secondary">{desc}
      </span>
    </span>
    <span className="mdc-list-item__end-detail">
      <SingleModule ident={module}/>
    </span>
  </li>
)

Item.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  ident: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired
}

export default Item
