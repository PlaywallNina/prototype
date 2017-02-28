import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../React/components/Modal'
import App from '../React/App'
import { Provider } from 'react-redux'
import store from '../React/store'
import { Router, Route, IndexRoute } from 'react-router'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')))
})
