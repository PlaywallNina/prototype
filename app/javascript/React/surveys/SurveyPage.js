import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router';
import Brand from '../components/Brand'
import setCurrentQuestion from '../actions/questions/set-current-question'
import sendAnswer from '../actions/questions/send-answer'
import './SurveyPage.scss'

export class SurveyPage extends PureComponent {

  // this.props.currentQuestion.answers[0].picture

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
          <h2>{this.props.currentQuestion.text}</h2>
        </div>
        <div className="awrapper">
          <div className="but"
            id="a1"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[0].id)}
            >
            <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=150%C3%97150&w=150&h=150"></img>
          </div>
          <div className="but"
            id="a2"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[1].id)}
            >
            <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=150%C3%97150&w=150&h=150"></img>
          </div>
          <div className="but"
            id="a3"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[2].id)}
            >
            <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=150%C3%97150&w=150&h=150"></img>
          </div>
          <div className="but"
            id="a4"
            onClick={this.handleClick.bind(this, this.props.currentQuestion.answers[3].id)}
            >
            <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=150%C3%97150&w=150&h=150"></img>
          </div>
        </div>
        <footer>{this.props.questionIndex + 1}/5</footer>
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
