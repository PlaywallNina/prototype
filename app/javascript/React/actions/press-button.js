import API from '../../middleware/api'
import { history } from '../../store'

export const STARTED_SURVEY = 'STARTED_SURVEY'

const api = new API()

export default (surveyId) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.app.authenticate()

    .then(() => {
      surveys.patch(surveyId, { joinType: 'start' })

      .then((response) => {
        dispatch(loadSuccess())
        dispatch({
          type: STARTED_SURVEY,
          payload: response
        })
        const surveyLink = `/surveys/${response._id}`
        history.push(surveyLink)
      })

      .catch((error) => {
        dispatch(loadError(error))
      })

      .then(() => {
        dispatch(loading(false))
      })
    })
  }
}
