import { createSlice } from '@reduxjs/toolkit'

interface SidebarState {
  collapsed: boolean
  mobile: boolean
  isOpen: boolean
}

const initialState: SidebarState = {
  collapsed: true,
  mobile: false,
  isOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload
    },
    setMobile: (state, action) => {
      state.mobile = action.payload
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { setCollapsed, setMobile, setIsOpen } = sidebarSlice.actions
export default sidebarSlice.reducer
