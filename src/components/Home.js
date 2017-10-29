import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'

import {MDCTabBar} from '@material/tabs'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      panel: 0,
      selectedFile: undefined,
      odds: {
        labels: [
          'TEI Absolutely Bare',
          'TEI SimplePrint',
          'TEI Lite',
          'TEI Tite',
          'TEI for Linguistic Corpora',
          'TEI for Manuscript Description',
          'TEI with Drama',
          'TEI for Speech Representation',
          'TEI for Authoring ODDs',
          'TEI with SVG',
          'TEI with MathML',
          'TEI with XInclude',
          'TEI for Journal of the TEI'
        ],
        urls: [
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_bare.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_simplePrint.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_lite.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_tite.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_corpus.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_ms.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_drama.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_speech.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_odds.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_svg.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_math.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_xinclude.odd',
          'http://www.tei-c.org/Vault/P5/current/xml/tei/custom/odd/tei_jtei.odd'
        ]
      }
    }
    this.updatePanel = this.updatePanel.bind(this)
  }

  componentDidMount() {
    const tabBar = new MDCTabBar(this.refs.tabs)
    tabBar.listen('MDCTabBar:change', ({detail: tabs}) => {
      this.updatePanel(tabs.activeTabIndex)
    })
    // Set start function to first option
    this._updateCustomizationUrl(this.state.odds.urls[0])
  }

  updatePanel(index) {
    if (index === 0) {
      this.setState({start: this.props.getCustomization})
    } else {
      this.setState({start: () => this.props.uploadCustomization(this.state.selectedFile)})
    }
    this.setState({panel: index})
  }

  _updateCustomizationUrl(url) {
    this.setState(
      {start: () => {this.props.getCustomization(url)}}
    )
  }

  _setActivePanel(index) {
    if (index === this.state.panel) {
      return {display: 'block'}
    }
    return {display: 'none'}
  }

  render() {
    let disabled = null
    if (this.state.panel === 1 && !this.state.selectedFile) {
      disabled = {disabled: 'disabled'}
    }
    return (
      <div className="romajs-hero">
        <div className="romajs-homebox mdc-card mdc-elevation--z10">
          <section className="mdc-card__primary">
            <nav id="basic-tab-bar" className="mdc-tab-bar" ref="tabs">
              <a className="mdc-tab mdc-tab--active">Select ODD</a>
              <a className="mdc-tab">Upload ODD</a>
              <span className="mdc-tab-bar__indicator" style={{transform: 'translateX(160px) scale(0.333333, 1)', visibility: 'visible'}}/>
            </nav>
            <div className="romajs-tabPanels">
              <div className="romajs-tabPanel" role="tabpanel" style={this._setActivePanel(0)}>
                <h2 className="mdc-typography--title">Select ODD</h2>
                <select className="mdc-select" onChange={e => this._updateCustomizationUrl(e.target.value)}>
                  {
                    this.state.odds.urls.map((url, i) => {
                      return (<option key={i} value={url}>{this.state.odds.labels[i]}</option>)
                    })
                  }
                </select>
              </div>
              <div className="romajs-tabPanel"role="tabpanel" style={this._setActivePanel(1)}>
                <h2 className="mdc-typography--title">Upload ODD</h2>
                <input type="file" id="files" onChange={e => {
                  this.setState({selectedFile: e.target.files.length > 0 ? e.target.files : undefined})
                }}/>
              </div>
            </div>
          </section>
          <section className="mdc-card__actions">
            <button className="mdc-button mdc-button--compact mdc-card__action" onClick={this.state.start} {...disabled}>Start</button>
          </section>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  uploadCustomization: PropTypes.func,
  getCustomization: PropTypes.func
}
