import React, { PureComponent } from 'react'
import {browserHistory} from 'react-router';

export class ThankYou extends PureComponent {
  backButton(e) {
    e.preventDefault()
    browserHistory.push('/')
  }

  render() {
    return(
      <div className="main-container">
        <div className='thanks-text'>
          <h1>Over de Playwall</h1>

          <p>De playwall is een manier om toegang te krijgen tot artikelen
          door het beantwoorden van een aantal vragen.</p>
          <p>De antwoorden op deze vragen worden uitsluitend anoniem opgeslagen.</p>
          <p>
            <button className='play' onClick={this.backButton}>Ik snap het</button>
          </p>
        </div>
      </div>
    )
  }
}

export default ThankYou
