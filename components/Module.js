import React, { PropTypes } from 'react'
import FullElementList from '../containers/FullElementList'

const Module = ({ onClick, selected, ident }) => (
  <li>
    <span
      onClick={onClick}
      style={{
        color: selected ? 'green' : 'black'
      }}
    >{ident}</span>
    <FullElementList module={ident} module_selected={selected} />
  </li>
)

Module.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  ident: PropTypes.string.isRequired
}

export default Module
