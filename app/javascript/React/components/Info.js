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
          <h1>Hoi!</h1>

          <p>Bij The Playwall kun je een spelletje spelen en in ruil daarvoor krijg je helemaal gratis deze content!</p>
          <p>En geen zorgen, alles wat je aanklikt wordt anoniem opgeslagen. Zo krijg jij eindelijk de waarde voor je data, die je verdient.</p>
          <p>Just play to pay!</p>
          <p>
            <button className='play' onClick={this.backButton}>Ik snap het</button>
          </p>
        </div>
      </div>
    )
  }
}

export default ThankYou
