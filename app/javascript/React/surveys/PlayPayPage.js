import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './PlayPayPage.sass'
import { history } from '../store'
import {browserHistory} from 'react-router';

export class PlayPayPage extends React.Component {


  handleClick(e) {
    e.preventDefault();
    browserHistory.push('questions');

    console.log("click input");
  }

  render() {

    return(

        <article className="playpay">
          <h1>De limiet van 5 gratis</h1>
          <h1>artikelen is</h1>
          <h1>bereikt.</h1>
          <p>neem een abbonement om verder te lezen.</p>
          <p><button onClick={ this.props.closeModal }>Krijg onbeperkt toegang</button></p>
          <p><button onClick={ this.props.closeModal }>Ik ben al NRC abbonee</button></p>
          <p><button onClick={this.handleClick.bind(this)}>PLAY</button></p>
          <p><button onClick={ this.props.closeModal }>x</button></p>
        </article>

    )
  }
}



export default PlayPayPage
