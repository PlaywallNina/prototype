import React, { PureComponent } from 'react'

export class ThankYou extends PureComponent {
  render() {
    window.setTimeout(function(){
      window.parent.postMessage('closeModal', '*')
    }, 2000);

    // thanksClick(e) {
    //   e.preventDefault();
    //   browserHistory.push('survey');
    // }

    return(
      <div className="main-container">
        <div className='main-text'>
          <h1>Thanks!</h1>

          <p>Je hebt nu toegang tot je gratis artikel.</p>
          <p>Veel leesplezier!</p>
        </div>
        <div>
          <p><button className='button' id='thanks'>Lees artikel</button></p>
        </div>
      </div>
    )
  }
}

export default ThankYou
