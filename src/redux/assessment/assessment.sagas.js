import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import AssessmentTypes from './assessment.types'
import {
  fetchAssessment,
  setAssessment,
  fetchAssessmentError,
  setAssessmentQuestions,
} from './assessment.actions'
import { initAuth } from '../auth/auth.actions'
import API from '../../utils/API'

export function* bootstrap(action) {
  yield put(initAuth())

  const assessmentId = action.payload
  try {
    yield put(fetchAssessment())
    let { assessment } = yield API.assessment({ assessmentId })
    let { questions } = yield API.assessmentQuestions({ assessmentId })

    yield put(setAssessment(assessment))
    yield put(setAssessmentQuestions(questions))
  } catch (e) {
    console.warn(e)
    put(fetchAssessmentError(e))
  }
}

export function* initAssessment(action) {
  yield takeLatest(AssessmentTypes.ASSESSSMENT_INIT, bootstrap)
}

export function* assessmentSagas() {
  yield all([call(initAssessment)])
}
