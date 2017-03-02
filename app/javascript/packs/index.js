import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from '../React/store'
import { Router, Route, IndexRoute } from 'react-router'
import {browserHistory} from 'react-router';

import App from '../React/App'
import PlayPayPage from '../React/surveys/PlayPayPage'
import SurveyPage from '../React/surveys/SurveyPage'
import ThankYouPage from '../React/components/ThankYou'
import InfoPage from '../React/components/Info'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PlayPayPage} />
          <Route path="/survey" component={SurveyPage} />
          <Route path="/thankyou" component={ThankYouPage} />
          <Route path='/info' component={InfoPage} />
        </Route>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')))
})
