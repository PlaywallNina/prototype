import React, { Component } from 'react'
import './SurveyPage.scss'

export class SurveyPage extends Component {
  render() {
    return(
      <div className="swrapper">
        <div className="qwrapper">
          <h2>The Question!</h2>
        </div>
        <div className="awrapper">
          <button className="but" id="a1">Answer 1</button>
          <button className="but" id="a2">Answer 2</button>
          <button className="but" id="a3">Answer 3</button>
          <button className="but" id="a4">Answer 4</button>
        </div>

      </div>
    )
  }
}

export default SurveyPage
