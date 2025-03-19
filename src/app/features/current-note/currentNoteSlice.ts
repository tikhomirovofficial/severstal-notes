import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../../../types/entities'

type CurrentNoteSluceState = {
    windowOpened: boolean
    data: Note
}

const initialState: CurrentNoteSluceState = {
    windowOpened: false,
    data: {
        id: "",
        created_date: "",
        updated_date: "",
        content: "",
        name: ""
    }
}

export const currentNoteSlice = createSlice({
    name: 'current-note',
    initialState,
    reducers: {
        toggleWindowOpened: state => {
            state.windowOpened = !state.windowOpened
        },
        setCurrentNoteData: (state, action: PayloadAction<Note>) => {
            state.data = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleWindowOpened, setCurrentNoteData } = currentNoteSlice.actions
export const currentNoteReducer = currentNoteSlice.reducer