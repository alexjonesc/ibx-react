import { all, call } from '@redux-saga/core/effects'
import { itemFilterSagas } from './item-filters/item-filters.sagas'

export default function* rootSaga() {
  yield all([call(itemFilterSagas)])
}
