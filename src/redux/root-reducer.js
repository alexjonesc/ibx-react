import { combineReducers } from 'redux'
import itemFiltersReducer from './item-filters/item-filters.reducer'
import itemListReducer from './item-list/items-list.reducer'

export default combineReducers({
  itemFilters: itemFiltersReducer,
  itemList: itemListReducer,
})
