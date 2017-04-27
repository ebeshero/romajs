import React, { PropTypes } from 'react'
import { Component } from 'react'
import FullModuleList from '../containers/FullModuleList'

import * as Drawer from '@material/drawer';

class AppBody extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return <div>
    <aside className="mdc-persistent-drawer">
        <nav className="mdc-persistent-drawer__drawer">
          <div className="mdc-persistent-drawer__toolbar-spacer"></div>
          <div className="mdc-list-group">
            <nav className="mdc-list">
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">dashboard</i>Dashboard
              </a>
              <a className="mdc-list-item mdc-persistent-drawer--selected" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">code</i>Modules &amp; Elements
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">bubble_chart</i>Classes
              </a>
              <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">vpn_key</i>Datatypes
              </a>
            </nav>
          </div>
        </nav>
      </aside>
      <header className="mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed romajs-toolbar">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <button className="romajs-menu material-icons">menu</button>
            <span className="mdc-toolbar__title">Roma js - ODD customization - Prototype 1</span>
          </section>
          <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
            <input type="file" id="files"/>
            <a className="material-icons" title="Upload ODD" onClick={this.props.onUploadClick}>file_upload</a>
            <a className="material-icons" title="Download ODD" onClick={()=>{this.props.onDownloadClick(this.props.odd.customization.json)}}>file_download</a>
          </section>
        </div>
      </header>
      <div className="romajs-content">
        <main className="romajs-main">
          <FullModuleList/>
        </main>
    </div>
    </div>
  }

  // <FullModuleList/>

  componentDidMount() {
    // Use Drawer.MDCFoundation for greater control
    var drawr = new Drawer.MDCPersistentDrawer(document.querySelector('.mdc-persistent-drawer'));
    drawr.open = true;
    // This should be handled more natively:
    document.querySelector('.romajs-menu').addEventListener('click', function() {
      drawr.open = !drawr.open;
    });
   }

}

AppBody.propTypes = {
  onUploadClick: PropTypes.func.isRequired
}

export default AppBody
