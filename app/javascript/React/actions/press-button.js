
export const STARTED_SURVEY = 'STARTED_SURVEY'

export default (newSurvey) => {
  return {
    type: STARTED_SURVEY,
    payload: newSurvey
  }
}
