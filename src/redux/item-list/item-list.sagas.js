import { takeLatest, call, put, all, delay, select } from '@redux-saga/core/effects'
import ItemListTypes from './item-list.types'
import ItemFiltersTypes from '../item-filters/item-filters.types'
import { fetchItemsStart, fetchItemsSuccess, fetchItemsError } from './item-list.actions'
import { selectItemFiltersSelectedFilters } from '../../redux/item-filters/item-filters.selectors'
import API from '../../utils/API'

export function* fetchItems() {
  try {
    const selecteFilters = yield select(selectItemFiltersSelectedFilters)
    const filters = {
      itemType: selecteFilters,
    }

    yield put(fetchItemsStart())
    let { items } = yield API.items(filters)
    yield put(fetchItemsSuccess(items))
  } catch (e) {
    console.warn(e)
    yield put(fetchItemsError(e))
  }
}

export function* debouncedFetchItems() {
  yield delay(1000)
  yield call(fetchItems)
}

export function* getItems() {
  yield takeLatest(ItemListTypes.GET_ITEMS, fetchItems)
}

export function* getItemsOnFiltersChange() {
  yield takeLatest(ItemFiltersTypes.SET_SELECTED_FILTERS, debouncedFetchItems)
}

export function* itemListSagas() {
  yield all([call(getItems), call(getItemsOnFiltersChange)])
}
