import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Brand from '../components/Brand'
import setCurrentQuestion from '../actions/questions/set-current-question'
import './SurveyPage.scss'

export class SurveyPage extends PureComponent {

  componentDidMount(){
   const { setCurrentQuestion, questionIndex, questions } = this.props
    setCurrentQuestion(questionIndex, questions)
  }
  render() {
    return(

      <div className="swrapper">
        <Brand />
        <div className="qwrapper">
          <h2>The Question!</h2>
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

const mapStateToProps = ({questionIndex, questions}) => ({
  questionIndex, questions
})

export default connect(mapStateToProps, {setCurrentQuestion}) (SurveyPage)
