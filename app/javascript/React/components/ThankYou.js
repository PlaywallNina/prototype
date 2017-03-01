import React, { PureComponent } from 'react'
import Brand from './Brand'
import './ThankYou.scss'

export class ThankYou extends PureComponent {
  render() {
    window.setTimeout(function(){

         window.location.href = "https://www.google.com";

     }, 3000);

    return(
      <div id="thankyoucontainer">
        <Brand />
          <h1>Thanks!</h1>

          <p>Je hebt nu toegang tot je gratis artikel.</p>
          <p>Enjoy!</p>
      </div>
    )
  }
}

export default ThankYou
