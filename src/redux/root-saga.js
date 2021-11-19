import { all, call } from '@redux-saga/core/effects'
import { browsePageSagas } from './browse-page/browse-page.sagas'
import { itemFilterSagas } from './item-filters/item-filters.sagas'
import { itemListSagas } from './item-list/item-list.sagas'
import { assessmentSagas } from './assessment/assessment.sagas'

export default function* rootSaga() {
  yield all([
    call(itemFilterSagas),
    call(itemListSagas),
    call(browsePageSagas),
    call(assessmentSagas),
  ])
}
