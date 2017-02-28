import React, { PureComponent } from 'react'
import './App.sass'
import ReactDOM from 'react-dom'
import Modal from './components/Modal'
import PlayPayPage from './surveys/PlayPayPage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <PlayPayPage closeModal={this.closeModal.bind(this)}/>
        </Modal>
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
