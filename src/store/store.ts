import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slices/modals/login.slice'
import settingSlice from './slices/modals/settings.slice'
import userSlice from './slices/user.slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    settings: settingSlice,
    login: loginSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
