import React, { PureComponent } from 'react'

export class ThankYou extends PureComponent {
  render() {
    window.setTimeout(function(){
      window.location.href = "https://www.svdj.nl/projects/the-playwall/";
    }, 3000);

    thanksClick(e) {
      e.preventDefault();
      browserHistory.push('survey');
    }

    return(
      <div className="main-container">
        <div className='main-text'>
          <h1>Thanks!</h1>

          <p>Je hebt nu toegang tot je gratis artikel.</p>
          <p>Enjoy!</p>
        </div>
        <div>
          <p><button className='button'>Naar artikel!</button></p>
        </div>
      </div>
    )
  }
}

export default ThankYou
