import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './PlayPayPage.sass'
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

        <article className="playpay">
          <h1>De limiet van 5 gratis</h1>
          <h1>artikelen is</h1>
          <h1>bereikt.</h1>
          <p>Dit artikel kost € 0,75. Betaal via iDeal  </p>
          <p>of krijg het artikel gratis via The Playwall  </p>
          <p><button onClick={ this.props.closeModal }>i</button></p>
          <p><button onClick={this.payClick.bind(this)}>Betaal met iDeal</button></p>
          <p><button onClick={this.playClick.bind(this)}>Play to pay</button></p>
          <p><button onClick={ this.props.closeModal }>x</button></p>
        </article>

    )
  }
}



export default PlayPayPage
