import React, { PropTypes } from 'react'
import { Component } from 'react'
import FullItemList from '../containers/FullItemList'

// import * as Drawer from '@material/drawer';

class AppBody extends Component {

  constructor(props){
    super(props)
  }

  render () {
    return <div>
      <header className="mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed romajs-toolbar">
        <div className="mdc-toolbar__row">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <span className="mdc-toolbar__title">Roma js - ODD customization - Prototype 1</span>
          </section>
          <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
            <input type="file" id="files"/>
            <a className="material-icons" title="Upload ODD" onClick={this.props.onUploadClick}>file_upload</a>
            <a className="material-icons" title="Download ODD" onClick={()=>{this.props.onDownloadClick(this.props.odd.customization.json)}}>file_download</a>
          </section>
        </div>
        <div className="mdc-toolbar__row romajs-toolbar2">
          <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            <span className="mdl-chip mdl-chip--deletable romajs-itemtype-selected">
                <span className="mdl-chip__text">Elements</span>
                <button type="button" className="mdl-chip__action"><i className="material-icons">cancel</i></button>
            </span>
            <span className="mdl-chip mdl-chip--deletable">
                <span className="mdl-chip__text">Classes</span>
                <button type="button" className="mdl-chip__action"><i className="material-icons">add_circle</i></button>
            </span>
            <span className="mdl-chip mdl-chip--deletable">
                <span className="mdl-chip__text">Datatypes</span>
                <button type="button" className="mdl-chip__action"><i className="material-icons">add_circle</i></button>
            </span>
          </section>
          <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
            <span className="mdl-chip mdl-chip--deletable romajs-searchbar">
                <span className="mdl-chip__text">
                  <div className="mdc-textfield">
                    <input type="text" className="mdc-textfield__input" id="search-textfield" placeholder="search"/>
                  </div>
                </span>
                <button type="button" className="mdl-chip__action"><i className="material-icons">search</i></button>
            </span>
          </section>
        </div>
      </header>
      <div className="romajs-content">
        <main className="romajs-main">
          <FullItemList/>
        </main>
      </div>
    </div>
  }

  componentDidMount() {
    // Use Drawer.MDCFoundation for greater control
    // var drawr = new Drawer.MDCPersistentDrawer(document.querySelector('.mdc-persistent-drawer'));
    // drawr.open = true;
    // // This should be handled more natively:
    // document.querySelector('.romajs-menu').addEventListener('click', function() {
    //   drawr.open = !drawr.open;
    // });
   }

}

AppBody.propTypes = {
  onUploadClick: PropTypes.func.isRequired
}

export default AppBody
