import React, { PropTypes } from 'react'
import Item from './Item'

const ItemList = ({ elements, onItemChange }) => (
  <ul className="mdc-list mdc-list--two-line romajs-itemlist">
    {elements.map(element => {
      if (element.visible) {
        return (<Item
          key={element.ident}
          {...element}
          onChange={() => onItemChange(element.ident, element.module, element.selected)}
        />)
      }
      return ''
    }
    )}
  </ul>
)

ItemList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool,
    visible: PropTypes.bool,
    ident: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    module: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemChange: PropTypes.func.isRequired
}

export default ItemList
