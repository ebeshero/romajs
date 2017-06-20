import React, { PropTypes } from 'react'
import Element from './Element'

const ElementList = ({ elements, onElementChange }) => (
  <ul className="mdc-list mdc-list--two-line">
    {elements.map(element =>
      <Element
        key={element.ident}
        {...element}
        onChange={() => onElementChange(element.ident, element.module, element.selected)}
      />
    )}
  </ul>
)

ElementList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool,
    ident: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onElementChange: PropTypes.func.isRequired
}

export default ElementList
