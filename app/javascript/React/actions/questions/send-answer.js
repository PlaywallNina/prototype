import { POST_ANSWER } from '../../middleware/api'

export default (answerId) => {
  return {
    type: POST_ANSWER,
    payload: answerId
  }
}
