import React, { PropTypes } from 'react'
import Module from './Module'

const ModuleList = ({ modules, onModuleChange }) => (
  <div className="mdc-layout-grid">
    {modules.map(module =>
      <Module
        key={module.ident}
        {...module}
        onChange={() => onModuleChange(module.ident, module.selected)}
      />
    )}
  </div>
)

ModuleList.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    ident: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onModuleChange: PropTypes.func.isRequired
}

export default ModuleList
