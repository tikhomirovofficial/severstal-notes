import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MOBILE_FROM_WIDTH } from '../../../config/settings'

type MainSliceState = {
    sidebarOpened: boolean
    mobileMode: boolean
}

const initialState: MainSliceState = {
    sidebarOpened: true,
    mobileMode: window.screen.width <= MOBILE_FROM_WIDTH
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleSideBarOpened: state => {
            state.sidebarOpened = !state.sidebarOpened
        },
        setMobileMode: (state, action: PayloadAction<boolean>) => {
            state.mobileMode = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleSideBarOpened, setMobileMode} = mainSlice.actions
export const mainReducer = mainSlice.reducer