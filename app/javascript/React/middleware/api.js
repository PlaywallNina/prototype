import request from 'superagent'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR'
export const GET_QUESTIONS_RECEIVED = 'GET_QUESTIONS_RECEIVED'

const questionService = store => next => action => {
  /* Pass all actions through by default */
  next(action)
  switch (action.type) {
  case GET_QUESTIONS:
    /* In case we receive an action to send an API request, send the appropriate request */
    request
      .get('/questions')
      .end((err, res) => {
        if (err) {
          /* in case there is any error, dispatch an action containing the error */
          return next({
            type: GET_QUESTIONS_ERROR,
            err
          })
        }
        const data = JSON.parse(res.text)
        /*
        Once data is received, dispatch an action telling the application
        that data was received successfully, along with the parsed data
        */
        next({
          type: GET_QUESTIONS_RECEIVED,
          payload: data
        })
      })
    break

  default:
    break
  }

};

export default questionService
