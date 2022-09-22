import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { Dispatch, Store, Thunk } from '..'

import { accountApi } from 's/api/account'
import type { UserType } from 's/types/account'

type AuthSlice = {
  loading?: boolean
  user?: UserType
  accessToken?: string
}

const initialState: AuthSlice = { loading: false }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      state.accessToken = payload
    },
    setUser: (state, { payload }: PayloadAction<UserType>) => {
      state.user = payload
    },
    onLogout: state => {
      state.user = state.accessToken = undefined
      state.loading = false
    },
  },
})

const { onLogout, setLoading, setAccessToken, setUser } = authSlice.actions

export { setAccessToken, setUser }

export const logout = (): Thunk => {
  return async function (dispatch: Dispatch) {
    dispatch(setLoading(true))
    const res = await accountApi.logout()
    if (res.data.result) {
      dispatch(onLogout())
    }
  }
}

export const selectUser = (state: Store) => state.auth.user
export const selectAccessToken = (state: Store) => state.auth.accessToken

export const authReducer = authSlice.reducer
