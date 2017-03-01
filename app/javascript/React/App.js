import './App.sass'
import React from 'react'
import getQuestions from './actions/questions/fetch'
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    this.props.getQuestions()
  }

  render() {
    return (
      <div className='content'>
          { this.props.children }
      </div>
    )
  }
}

export default connect(null, { getQuestions })(App)
