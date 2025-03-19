import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type MainSliceState = {
    sidebarOpened: boolean
}

const initialState: MainSliceState = {
    sidebarOpened: true
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleSideBarOpened: state => {
            state.sidebarOpened = !state.sidebarOpened
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleSideBarOpened } = mainSlice.actions
export const mainReducer = mainSlice.reducer