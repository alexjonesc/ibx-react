import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import BrowsePageTypes from './browse-page.types'
import { browsePageReady } from './browse-page.actions'
import Auth from '../../utils/Auth'

export function* bootstrap() {
  yield Auth.init()
  yield put(browsePageReady(true))
}

export function* initBrowsePage() {
  console.log('BROWSE_PAGE_INITBROWSE_PAGE_INIT')
  yield takeLatest(BrowsePageTypes.BROWSE_PAGE_INIT, bootstrap)
}

export function* browsePageSagas() {
  yield all([call(initBrowsePage)])
}
