import { GET_QUESTIONS_RECEIVED } from '../middleware/api'

export default(state = false, { type }) => {
  switch(type) {
    case GET_QUESTIONS_RECEIVED:
      return true

    default:
      return state
  }
}
