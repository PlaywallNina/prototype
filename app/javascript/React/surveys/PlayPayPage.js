import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './PlayPayPage.scss'

import { history } from '../store'
import {browserHistory} from 'react-router';

export class PlayPayPage extends React.Component {


  playClick(e) {
    e.preventDefault();
    browserHistory.push('questions');

    console.log("click button");
  }

  payClick(e) {
    e.preventDefault();
    browserHistory.push('questions');

    console.log("click button");
  }

  render() {

    return(

        <article className="playpaymodal">
          <div className="info-exit">
            <p><button className="info" onClick={ this.props.closeModal }>i</button></p>
            <p><button className="exit" onClick={ this.props.closeModal }>x</button></p>
          </div>
          <div className="head-sum-play">
              <div className="headline">
                <h1>De limiet van 5 gratis</h1>
                <h1>artikelen is</h1>
                <h1>bereikt.</h1>
              </div>
              <div className="summary">
                <p>Dit artikel kost € 0,75. Betaal via iDeal  </p>
                <p>of krijg het artikel gratis via The Playwall  </p>
              </div>
              <div className="pay-play">
                <p><button className="pay" onClick={ this.payClick.bind(this) }>Betaal met iDeal</button></p>
                <p><button className="play" onClick={this.playClick.bind(this) }>Play to pay</button></p>
              </div>
          </div>
        </article>

    )
  }
}



export default PlayPayPage
