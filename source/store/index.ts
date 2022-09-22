import AsyncStorage from '@react-native-async-storage/async-storage'
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import { name as appName } from '../../app.json'
import { env } from '../config'

import { authReducer } from './auth'
import { settingsReducer } from './settings'

export type Store = ReturnType<typeof store.getState>
export type Thunk = ThunkAction<void, Store, undefined, Action<string>>
export type Dispatch = typeof store.dispatch

const persistConfig = {
  blacklist: ['order'],
  key: `${appName}.store`,
  storage: AsyncStorage,
}

const combinedReducers = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
})

const reducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
  reducer,
  devTools: env.debugMode,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const useDispatch = (): Dispatch => _useDispatch<Dispatch>()
export const useSelector: TypedUseSelectorHook<Store> = _useSelector
