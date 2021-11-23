import { takeLatest, call, all, select, put } from '@redux-saga/core/effects'
import Auth from '../../utils/Auth'
import API from '../../utils/API'
import AuthTypes from './auth.types'
import { fetchPieTokenError, setPieToken } from '../auth/auth.actions'
import { selectPieToken } from './auth.selectors'

export function* init() {
  try {
    yield Auth.init()
    const pieToken = yield select(selectPieToken)
    if (!pieToken) {
      let { token } = yield call(API.pieToken)
      yield put(setPieToken(token))
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
