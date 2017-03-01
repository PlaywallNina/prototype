import {
  GET_QUESTIONS,
  GET_QUESTIONS_ERROR,
  GET_QUESTIONS_RECEIVED,
  POST_ANSWER_SUCCESS
} from '../middleware/api'

export default(state = [], { type, payload }) => {
  switch(type) {
    case GET_QUESTIONS_RECEIVED:
      return [].concat(payload)

    default:
      return state
  }
}
