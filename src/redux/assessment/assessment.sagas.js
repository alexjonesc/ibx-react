import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import AssessmentTypes from './assessment.types'
import {
  fetchAssessmentStart,
  fetchAssessmentSuccess,
  fetchAssessmentError,
} from './assessment.actions'
// import Auth from '../../utils/Auth'
import API from '../../utils/API'

export function* bootstrap(action) {
  //yield Auth.init()

  const assessmentId = action.payload
  try {
    yield put(fetchAssessmentStart())
    let { assessment } = yield API.assessment({ assessmentId })
    yield put(fetchAssessmentSuccess(assessment))
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