import React, { PureComponent } from 'react'
import Brand from './Brand'
import './ThankYou.scss'

export class ThankYou extends PureComponent {

  render() {
    window.setTimeout(function(){
      window.location.href = "https://www.google.com";
    }, 3000);
    
    return(
      <div className="modal-container">
        <Brand />
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
