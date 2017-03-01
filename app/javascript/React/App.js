import './App.sass'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import getQuestions from './actions/questions/fetch'

class App extends PureComponent {
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
