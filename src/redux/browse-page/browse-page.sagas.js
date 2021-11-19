import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import BrowsePageTypes from './browse-page.types'
import { browsePageReady } from './browse-page.actions'
import { getFilters } from '../item-filters/item-filters.actions'
import Auth from '../../utils/Auth'

export function* bootstrap() {
  yield Auth.init()
  yield put(getFilters())
  yield put(browsePageReady(true))
}

export function* initBrowsePage() {
  yield takeLatest(BrowsePageTypes.BROWSE_PAGE_INIT, bootstrap)
}

export function* browsePageSagas() {
  yield all([call(initBrowsePage)])
}
