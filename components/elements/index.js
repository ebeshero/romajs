import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Element extends Component {
  componentWillMount() {
    if (!this.props.oddLoaded) {
      this.props.redirect()
    }
  }

  render() {
    if (!this.props.oddLoaded) {
      return null
    }
    return (<div>
      <div><Link to="/">Back</Link></div>
      <dl>
        <dt>Name</dt>
        <dd>{this.props.element.ident}</dd>
        <dt>Description</dt>
        <dd>{this.props.element.desc}</dd>
        <dt>Alternative identifier</dt>
        <dd>{this.props.element.altIdent}</dd>
      </dl>
    </div>)
  }
}

Element.propTypes = {
  oddLoaded: PropTypes.bool,
  element: PropTypes.object,
  redirect: PropTypes.func
}
