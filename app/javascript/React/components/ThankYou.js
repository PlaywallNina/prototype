import React, { PureComponent } from 'react'

export class ThankYou extends PureComponent {
  closeModal() {
    window.parent.postMessage('closeModal', '*')
  }
  render() {
    window.setTimeout(function(){
      window.parent.postMessage('closeModal', '*')
    }, 2000);

    return(
      <div className="main-container">
        <div className='main-text'>
          <h1>Thanks!</h1>

          <p>Je hebt nu toegang tot je gratis artikel.</p>
          <p>Veel leesplezier!</p>
        </div>
        <div>
          <p><button className='button' onClick={this.closeModal}>Lees artikel</button></p>
        </div>
      </div>
    )
  }
}

export default ThankYou
