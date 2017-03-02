import React, { PureComponent } from 'react'
import './ThankYou.scss'

export class ThankYou extends PureComponent {

  render() {
    window.setTimeout(function(){
      window.location.href = "https://www.svdj.nl/projects/the-playwall/";
    }, 3000);

    return(
      <div className="modal-container">
        <div className='thanks-text'>
          <h1>Thanks!</h1>

          <p>Je hebt nu toegang tot je gratis artikel.</p>
          <p>Enjoy!</p>
        </div>
      </div>
    )
  }
}

export default ThankYou
