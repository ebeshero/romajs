import React, { PropTypes } from 'react'
import FullElementList from '../containers/FullElementList'

const Module = ({ onChange, selected, ident }) => (
  <div className="mdl-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone">

    <div className="mdc-card romajs-card" style={{
      backgroundColor: selected ? "#d2f9c2" : ""
    }}>
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">{ident}</h1>
        <div className="mdc-form-field">
          <div className="mdc-checkbox">
            <input type="checkbox" id="basic-checkbox" className="mdc-checkbox__native-control"
              checked={selected} onChange={onChange}/>
            <div className="mdc-checkbox__background">
              <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
              </svg>
              <div className="mdc-checkbox__mixedmark"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mdc-card__supporting-text">
        <FullElementList module={ident} module_selected={selected} />
      </section>
    </div>



  </div>
)

Module.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  ident: PropTypes.string.isRequired
}

export default Module
