import { takeLatest, call, put, all, select } from '@redux-saga/core/effects'
import ItemListTypes from './item-list.types'
import { fetchItemsStart, fetchItemsSuccess, fetchItemsError } from './item-list.actions'
import API from '../../utils/API'

export function* fetchItems() {
  try {
    yield put(fetchItemsStart())
    let { items } = yield API.items()
    yield put(fetchItemsSuccess(items))
  } catch (e) {
    console.warn(e)
    yield put(fetchItemsError(e))
  }
}

export function* getItems() {
  yield takeLatest(ItemListTypes.GET_ITEMS, fetchItems)
}

export function* itemListSagas() {
  yield all([call(getItems)])
}
