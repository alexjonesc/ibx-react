import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import itemFiltersReducer from './item-filters/item-filters.reducer'
import itemListReducer from './item-list/items-list.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['itemFilters'],
}

const rootReducer = combineReducers({
  itemFilters: itemFiltersReducer,
  itemList: itemListReducer,
})

export default persistReducer(persistConfig, rootReducer)
