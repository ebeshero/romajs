import React, { PropTypes } from 'react'

const Module = ({ onClick, selected, ident }) => (
  // console.log(selected, name)
  <li
    onClick={onClick}
    style={{
      color: selected ? 'green' : 'black'
    }}
  >
    {ident}
  </li>
)

Module.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  ident: PropTypes.string.isRequired
}

export default Module
