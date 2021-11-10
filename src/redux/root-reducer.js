import { combineReducers } from 'redux'
import itemFiltersReducer from './item-filters/item-filters.reducer'

export default combineReducers({
  itemFilters: itemFiltersReducer,
})
