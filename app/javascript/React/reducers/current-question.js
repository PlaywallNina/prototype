import { SET_CURRENT_QUESTION } from '../actions/questions/set-current-question'

export default(state = null, { type, payload }) => {
  switch(type) {
    case SET_CURRENT_QUESTION:
      return Object.assign({}, payload)

    default:
      return state
  }
}
