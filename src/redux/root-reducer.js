import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import browsePageReducer from './browse-page/browse-page.reducer'
import itemFiltersReducer from './item-filters/item-filters.reducer'
import itemListReducer from './item-list/items-list.reducer'
import assessementReducer from './assessment/assessment.reducer'
import authReducer from './auth/auth.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['itemFilters'],
}

const rootReducer = combineReducers({
  browsePage: browsePageReducer,
  itemFilters: itemFiltersReducer,
  itemList: itemListReducer,
  assessment: assessementReducer,
  auth: authReducer,
})

export default persistReducer(persistConfig, rootReducer)
