import AssessmentTypes from './assessment.types'

const INITIAL_STATE = {
  id: null,
  ready: false,
  assessment: null,
  questions: [],
}

const assessementReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
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
        assessment: payload || [],
        ready: false,
      }
    case AssessmentTypes.FETCH_ASSESSMENT_ERROR:
      return {
        ...state,
        ready: false,
        errorMessage: payload || 'error',
      }
    case AssessmentTypes.SET_ASSESSMENT_QUESTIONS:
      return {
        ...state,
        questions: payload || [],
      }
    default:
      return state
  }
}

export default assessementReducer
