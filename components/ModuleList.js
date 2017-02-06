import React, { PropTypes } from 'react'
import Module from './Module'

const ModuleList = ({ modules, onModuleClick }) => (
  <ul>
    {modules.map(module =>
      <Module
        key={module.ident}
        {...module}
        onClick={() => onModuleClick(module.ident, module.selected)}
      />
    )}
  </ul>
)

ModuleList.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool,
    ident: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onModuleClick: PropTypes.func.isRequired
}

export default ModuleList
