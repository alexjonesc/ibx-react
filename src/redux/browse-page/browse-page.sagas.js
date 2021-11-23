import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import BrowsePageTypes from './browse-page.types'
import { browsePageReady } from './browse-page.actions'
import { fetchFilters } from '../item-filters/item-filters.sagas'
import { init as initAuth } from '../auth/auth.sagas'
import { fetchItems } from '../item-list/item-list.sagas'

export function* bootstrap() {
  yield call(initAuth)
  yield call(fetchFilters)
  yield put(browsePageReady(true))
  yield call(fetchItems)
}

export function* initBrowsePage() {
  yield takeLatest(BrowsePageTypes.BROWSE_PAGE_INIT, bootstrap)
}

export function* browsePageSagas() {
  yield all([call(initBrowsePage)])
}
