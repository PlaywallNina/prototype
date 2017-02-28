import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './PlayPayPage.sass'

export class PlayPayPage extends PureComponent {
  render() {

    return(
      <article className="playpay">
        <h1>De limiet van 5 gratis</h1>
        <h1>artikelen is</h1>
        <h1>bereikt.</h1>
        <p>neem een abbonement om verder te lezen.</p>
        <p><button onClick={() => this.closeModal()}>Krijg onbeperkt toegang</button></p>
        <p><button onClick={() => this.closeModal()}>Ik ben al NRC abbonee</button></p>
        <p><button onClick={() => this.closeModal()}>Play</button></p>
        <p><button onClick={() => this.closeModal()}>x</button></p>
      </article>
    )
  }
}

export default PlayPayPage
