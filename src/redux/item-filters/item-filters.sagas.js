import { put, select } from '@redux-saga/core/effects'
import { fetchFiltersStart, fetchFiltersSuccess, fetchFiltersError } from './item-filters.actions'
import { selectItemFiltersFilters } from '../../redux/item-filters/item-filters.selectors'
import API from '../../utils/API'

export function* fetchFilters() {
  const cFilters = yield select(selectItemFiltersFilters)

  if (!cFilters.length) {
    try {
      yield put(fetchFiltersStart())
      let { filters } = yield API.filters()
      yield put(fetchFiltersSuccess(filters))
    } catch (e) {
      console.warn(e)
      yield put(fetchFiltersError(e))
    }
  }
}
