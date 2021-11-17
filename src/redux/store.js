import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import subscribeActionMiddleware from 'redux-subscribe-action'

// logger must be last middleware
const middlewares = [thunk, subscribeActionMiddleware, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persitor = persistStore(store)

export default store
