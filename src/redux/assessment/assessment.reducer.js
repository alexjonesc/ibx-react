import AssessmentTypes from './assessment.types'

const INITIAL_STATE = {
  id: null,
  ready: false,
  assessment: null,
}

const assessementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AssessmentTypes.ASSESSSMENT_INIT:
      return {
        ...state,
        ready: false,
      }
    case AssessmentTypes.FETCH_ASSESSMENT_START:
      return {
        ...state,
        ready: false,
      }
    case AssessmentTypes.FETCH_ASSESSMENT_SUCCESS:
      return {
        ...state,
        assessment: action.payload || [],
        ready: false,
      }
    case AssessmentTypes.FETCH_ASSESSMENT_ERROR:
      return {
        ...state,
        ready: false,
        errorMessage: action.payload || 'error',
      }
    default:
      return state
  }
}

export default assessementReducer
