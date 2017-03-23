import React, { PropTypes } from 'react'

const Element = ({ onClick, selected, ident }) => (
  <li>
    <span
      onClick={onClick}
      style={{
        color: selected ? 'blue' : 'black'
      }}
    >{ident}</span>
  </li>
)

Element.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  ident: PropTypes.string.isRequired
}

export default Element
