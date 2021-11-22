import AssessmentTypes from './assessment.types'

export const initAssessment = (id) => ({
  type: AssessmentTypes.ASSESSSMENT_INIT,
  payload: id,
})

export const assessmentReady = (ready) => ({
  type: AssessmentTypes.ASSESSSMENT_READY,
  payload: ready,
})

export const fetchAssessment = () => ({
  type: AssessmentTypes.FETCH_ASSESSMENT,
})

export const setAssessment = (assessment) => ({
  type: AssessmentTypes.SET_ASSESSMENT,
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
