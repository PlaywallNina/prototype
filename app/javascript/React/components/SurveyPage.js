import React, { Component } from 'react'

export class SurveyPage extends Component {
  render() {
    return(
      <div>
        <div className="qwrapper">
          <h2>The Question!</h2>
        </div>
        <div className="awrapper">
          <button>Answer 1</button>
          <button>Answer 2</button>
          <button>Answer 3</button>
          <button>Answer 4</button>
        </div>

      </div>
    )
  }
}

export default SurveyPage
