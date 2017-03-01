import { GET_QUESTIONS_RECEIVED } from '../middleware/api'

export default(state = null, { type, payload }) => {
  switch(type) {
    case GET_QUESTIONS_RECEIVED:
      return 0

    default:
      return state
  }
}
