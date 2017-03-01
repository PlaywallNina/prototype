import React, { PureComponent } from 'react'
import Brand from '../components/Brand'
import './SurveyPage.scss'

export class SurveyPage extends PureComponent {
  render() {
    return(

      <div className="swrapper">
        <Brand />
        <div className="qwrapper">
          <h2>What type of food are you?</h2>
        </div>
        <div className="awrapper">
          <div className="but" id="a1">Answer 1</div>
          <div className="but" id="a2">Answer 2</div>
          <div className="but" id="a3">Answer 3</div>
          <div className="but" id="a4">Answer 4</div>
        </div>
      </div>
    )
  }
}

export default SurveyPage
