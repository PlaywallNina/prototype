import { STARTED_SURVEY } from '../actions/press-button'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case STARTED_SURVEY :
      return [].concat(payload)

    default :
      return state
  }
}
