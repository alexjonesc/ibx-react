import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import subscribeActionMiddleware from 'redux-subscribe-action'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware, subscribeActionMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persitor = persistStore(store)

export default store
