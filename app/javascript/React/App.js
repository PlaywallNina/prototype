import React, { PureComponent } from 'react'
import './App.sass'
import ReactDOM from 'react-dom'
import Modal from './components/Modal'

import PlayPayPage from './surveys/PlayPayPage'
import SurveyPage from './surveys/SurveyPage'
import Brand from './components/Brand'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <SurveyPage />
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

}

export default App


  //  <PlayPayPage closeModal={this.closeModal.bind(this)}/>
