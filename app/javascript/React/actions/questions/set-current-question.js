export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'

export default(index, array) => {
  return {
    type: SET_CURRENT_QUESTION,
    payload: array[index]
  }
}
