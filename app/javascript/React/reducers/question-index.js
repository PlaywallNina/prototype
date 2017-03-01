import { GET_QUESTIONS_RECEIVED } from '../middleware/api'
import { POST_ANSWER } from '../middleware/api'

export default(state = null, { type, payload }) => {
  switch(type) {
    case GET_QUESTIONS_RECEIVED:
      return 0

    case POST_ANSWER:
      const newIndex = state + 1
      return newIndex

    default:
      return state
  }
}
