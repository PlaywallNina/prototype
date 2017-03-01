import './App.sass'
import React from 'react'
import { connect } from 'react-redux'
import getQuestions from './actions/questions/fetch'
import sendAnswer from './actions/questions/send-answer'

class App extends React.Component {
  componentDidMount() {
    this.props.getQuestions()
  }

  sendTest(e) {
    e.preventDefault()
    sendAnswer(this.props.currentQuestion.answers[0].id)
  }
  render() {
    return (
      <div className='content'>
        <button onClick={this.sendTest.bind(this)}>Test 1</button>
          { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = ({questions}) => ({
  questions,
  currentQuestion: questions[0]
})
export default connect(mapStateToProps, { getQuestions })(App)
