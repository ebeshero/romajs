import React, { PropTypes } from 'react'
import Element from './Element'

const ElementList = ({ elements, onElementClick }) => (
  <ul>
    {elements.map(element =>
      <Element
        key={element.ident}
        {...element}
        onClick={() => onElementClick(element.ident, element.module, element.selected)}
      />
    )}
  </ul>
)

ElementList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool,
    ident: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onElementClick: PropTypes.func.isRequired
}

export default ElementList
