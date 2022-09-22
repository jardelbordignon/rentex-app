import { createSlice } from '@reduxjs/toolkit'

type SettingsSlice = {
  theme: 'dark' | 'light'
  locale: 'pt' | 'es' | 'en'
}

const initialState: SettingsSlice = {
  theme: 'light',
  locale: 'pt',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
})

const { toggleTheme } = settingsSlice.actions

export { toggleTheme }

export const settingsReducer = settingsSlice.reducer
