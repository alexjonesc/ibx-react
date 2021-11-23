import { takeLatest, call, all, select, put } from '@redux-saga/core/effects'
import Auth from '../../utils/auth'
import API from '../../services/api'
import AuthTypes from './auth.types'
import { fetchPieTokenError, setPieToken } from '../auth/auth.actions'
import { selectPieToken } from './auth.selectors'
import { makePieApi } from '../../services/pie/pie-api'

export function* init() {
  try {
    yield Auth.init()
    const pieToken = yield select(selectPieToken)
    if (!pieToken) {
      let { token } = yield call(API.pieToken)
      yield put(setPieToken(token))
      makePieApi({ token })
    }
  } catch (e) {
    console.warn(e)
    yield call(fetchPieTokenError, e)
  }
}

export function* initAuth(action) {
  yield takeLatest(AuthTypes.AUTH_INIT, init)
}

export function* authSagas() {
  yield all([call(initAuth)])
}
