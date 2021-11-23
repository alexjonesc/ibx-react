import { all, call } from '@redux-saga/core/effects'
import { browsePageSagas } from './browse-page/browse-page.sagas'
import { itemListSagas } from './item-list/item-list.sagas'
import { assessmentSagas } from './assessment/assessment.sagas'
import { authSagas } from './auth/auth.sagas'

export default function* rootSaga() {
  yield all([call(authSagas), call(itemListSagas), call(browsePageSagas), call(assessmentSagas)])
}
