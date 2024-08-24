import { configureStore } from '@reduxjs/toolkit'
import settingSlice from './slices/settings.slice'
import userSlice from './slices/user.slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    settings: settingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
