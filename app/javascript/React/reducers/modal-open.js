import { TOGGLE_MODAL } from '../actions/modal/toggle'

export default (state = false, type = {}) => {
  switch(type) {
    case TOGGLE_MODAL:
      return !state

    default:
      return state
  }
}
