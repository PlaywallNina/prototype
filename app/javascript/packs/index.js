import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from '../React/store'
import { Router, Route, IndexRoute } from 'react-router'

import Modal from '../React/components/Modal'
import App from '../React/App'
import PlayPayPage from '../React/surveys/PlayPayPage'
import SurveyPage from '../React/components/SurveyPage'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PlayPayPage} />
          <Route path="/surveys" component={SurveyPage} />
        </Route>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')))
})
