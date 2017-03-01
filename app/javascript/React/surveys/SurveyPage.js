import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router';
import Brand from '../components/Brand'
import setCurrentQuestion from '../actions/questions/set-current-question'
import sendAnswer from '../actions/questions/send-answer'
import './SurveyPage.scss'

export class SurveyPage extends PureComponent {

  handleClick(e) {
    this.props.sendAnswer(e)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.questionIndex !== this.props.questionIndex) {
      if (nextProps.questionIndex == 5) {
        browserHistory.push('/thankyou')
      }
      const { questionIndex, questions } = nextProps
      this.props.setCurrentQuestion(questionIndex, questions)
    }
  }
  componentDidMount(){
      const { questionIndex, questions } = this.props
      this.props.setCurrentQuestion(questionIndex, questions)
  }

  render() {
    if (!this.props.hasQuestion) return null

    return(
      <div className="swrapper">
        <Brand />
        <div className="qwrapper">
          <h2>The Question!</h2>
        </div>
        <div className="awrapper">
          <div className="but"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[0].id)}
            >
            Answer 1
          </div>
          <div className="but"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[1].id)}
            >
            Answer 2
          </div>
          <div className="but"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[2].id)}
            >
            Answer 3
          </div>
          <div className="but"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[3].id)}
            >
            Answer 4
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({questionIndex, questions, currentQuestion}) => ({
  questionIndex,
  questions,
  currentQuestion,
  hasQuestion: !!currentQuestion
})

export default connect(mapStateToProps, {setCurrentQuestion, sendAnswer })(SurveyPage)
