import AssessmentTypes from './assessment.types'

const INITIAL_STATE = {
  id: null,
  assessment: null,
  questions: [],
}

const assessementReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AssessmentTypes.ASSESSSMENT_INIT:
      return {
        ...state,
      }
    case AssessmentTypes.FETCH_ASSESSMENT:
      return {
        ...state,
      }
    case AssessmentTypes.SET_ASSESSMENT:
      return {
        ...state,
        assessment: payload || [],
      }
    case AssessmentTypes.FETCH_ASSESSMENT_ERROR:
      return {
        ...state,

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
