import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import AssessmentTypes from './assessment.types'
import {
  fetchAssessment,
  setAssessment,
  fetchAssessmentError,
  setAssessmentQuestions,
} from './assessment.actions'
import { init as initAuth } from '../auth/auth.sagas'
import API from '../../services/api'
// import { API as PieApi } from '../../services/pie/pie-api'

export function* bootstrap(action) {
  yield call(initAuth)
  yield window.customElements.whenDefined('pie-player')
  try {
    const assessmentId = action.payload
    yield put(fetchAssessment())
    let { assessment } = yield API.assessment({ assessmentId })
    let { questions } = yield API.assessmentQuestions({ assessmentId })

    // const res1 = yield PieApi.contentItem('538a0f71-e116-468c-a9f1-4668d9e4e996@0.0.3')
    // console.log('------>', res1)
    // const res2 = yield PieApi.contentItem('538a0f71-e116-468c-a9f1-4668d9e4e996@0.0.3')
    // console.log('------>', res2)

    // const t = yield PieApi.test()
    // console.log('------> test:', t)

    // const res1 = yield PieApi.contentItem('538a0f71-e116-468c-a9f1-4668d9e4e996@0.0.3')
    // console.log('------>', res1)

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
