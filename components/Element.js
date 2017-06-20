import React, { PropTypes } from 'react'

const Element = ({ onChange, selected, ident }) => (
  <li className="mdc-list-item mdc-elevation--z1">
    <span className="mdc-checkbox">
      <input type="checkbox" id="basic-checkbox" className="mdc-checkbox__native-control"
        checked={selected} onChange={onChange}/>
      <span className="mdc-checkbox__background">
        <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
          <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
        </svg>
        <span className="mdc-checkbox__mixedmark"></span>
      </span>
    </span>
    <span className="mdc-list-item__text">
      {ident}
      <span className="mdc-list-item__text__secondary">desc.
      </span>
    </span>
    <span className="mdc-list-item__end-detail romajs-item-module">
     (core)
    </span>
  </li>
)

Element.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  ident: PropTypes.string.isRequired
}

export default Element
