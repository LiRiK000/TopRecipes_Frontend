import { createSlice } from '@reduxjs/toolkit'

interface SettingsState {
  isOpen: boolean
}

const initialState: SettingsState = {
  isOpen: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openSettings(state) {
      state.isOpen = true
    },
    closeSettings(state) {
      state.isOpen = false
    },
  },
})

export const { openSettings, closeSettings } = settingsSlice.actions

export default settingsSlice.reducer
