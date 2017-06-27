import React, { PropTypes } from 'react'

const Module = ({ onChange, selected, ident }) => (
  <span><button type="button" className="mdl-chip__action" onClick={()=>onChange(ident, selected)}><Icon selected={selected}/></button> ({ident})</span>
)

const Icon = (props) => {
  if (props.selected) {
    return <i className="material-icons romajs-color-no">cancel</i>
  }
  return <i className="material-icons romajs-color-yes">add_circle</i>
}

Module.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  ident: PropTypes.string.isRequired
}

Icon.propTypes = {
  selected: PropTypes.bool.isRequired
}

export default Module
