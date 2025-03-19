import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MOBILE_START_WIDTH, TABLET_START_WIDTH } from '../../../config/settings'

type MainSliceState = {
    sidebarOpened: boolean
    tabletMode: boolean
    mobileMode: boolean
}

const initialState: MainSliceState = {
    sidebarOpened: true,
    tabletMode: window.screen.width <= TABLET_START_WIDTH,
    mobileMode: window.screen.width <= MOBILE_START_WIDTH
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleSideBarOpened: state => {
            state.sidebarOpened = !state.sidebarOpened
        },
        setTabletMode: (state, action: PayloadAction<boolean>) => {
            state.tabletMode = action.payload
        },
        setMobileMode: (state, action: PayloadAction<boolean>) => {
            state.mobileMode = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleSideBarOpened, setTabletMode, setMobileMode } = mainSlice.actions
export const mainReducer = mainSlice.reducer