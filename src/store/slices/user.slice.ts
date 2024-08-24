import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  isAuth: boolean
}

const initialState: UserState = {
  isAuth: false,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload
    },
  },
})

export const { setAuth } = UserSlice.actions
export default UserSlice.reducer
