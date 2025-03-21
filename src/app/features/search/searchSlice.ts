import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SearchSliceState = {
    main_search_val: string
    sidebar_search_val: string
}

const initialState: SearchSliceState = {
    main_search_val: "",
    sidebar_search_val: ""
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSidebarSearchValue: (state, action: PayloadAction<string>) => {
            state.sidebar_search_val = action.payload
        },
        setMainSearchValue: (state, action: PayloadAction<string>) => {
            state.main_search_val = action.payload
        },

    },
})

export const { setMainSearchValue, setSidebarSearchValue } = searchSlice.actions
export const searchReducer = searchSlice.reducer