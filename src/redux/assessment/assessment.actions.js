import AssessmentTypes from './assessment.types'

export const initAssessment = (id) => ({
  type: AssessmentTypes.ASSESSSMENT_INIT,
  payload: id,
})

export const assessmentReady = (ready) => ({
  type: AssessmentTypes.ASSESSSMENT_READY,
  payload: ready,
})

export const fetchAssessmentStart = () => ({
  type: AssessmentTypes.FETCH_ASSESSMENT_START,
})

export const fetchAssessmentSuccess = (assessment) => ({
  type: AssessmentTypes.FETCH_ASSESSMENT_SUCCESS,
  payload: assessment,
})

export const fetchAssessmentError = (errorMessage) => ({
  type: AssessmentTypes.FETCH_ASSESSMENT_ERROR,
  payload: errorMessage,
})

export const setAssessmentQuestions = (questions) => ({
  type: AssessmentTypes.SET_ASSESSMENT_QUESTIONS,
  payload: questions,
})
