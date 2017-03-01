import React, { PureComponent } from 'react'
import './App.sass'
import ReactDOM from 'react-dom'
import Modal from './components/Modal'

import PlayPayPage from './surveys/PlayPayPage'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <PlayPayPage />
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
