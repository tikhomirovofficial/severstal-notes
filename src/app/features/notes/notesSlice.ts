import { createSlice } from '@reduxjs/toolkit'
import { Note } from '../../../types/entities'
import { getNormalizedDate } from '../../../utils/getNormalizedDate'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getFromStorage } from '../../../utils/localStorageManager'
import { generateNote } from '../../../utils/generateNote'

type NotesSliceState = {
    items: Note[]
    noteOpened: boolean
    currentNoteData: Note
}

type EditNotePayload = {
    id: string
    key: keyof Pick<Note, "name" | "content">
    value: string
}

const initialState: NotesSliceState = {
    items: getFromStorage("notes") || [generateNote()],
    noteOpened: false,
    currentNoteData: {
        id: "",
        created_date: "",
        updated_date: "",
        content: "",
        name: ""
    }
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state) => {
            state.items = [
                ...state.items,
                generateNote()
            ]
        },
        copyNote: (state, action: PayloadAction<string>) => {
            const tempNotes: Note[] = JSON.parse(JSON.stringify(state.items))
            const copyingIndex = tempNotes.findIndex(item => item.id === action.payload)
            const date = new Date();
            const normalizedDate = getNormalizedDate(date)

            tempNotes.splice(copyingIndex + 1, 0, {
                ...tempNotes[copyingIndex],
                id: Date.now().toString(),
                created_date: normalizedDate,
                updated_date: normalizedDate
            })

            state.items = [...tempNotes]
        },


        editNote: (state, action: PayloadAction<EditNotePayload>) => {
            const { id, value, key } = action.payload

            const editingIndex = state.items.findIndex(item => item.id === id);
            const date = new Date();
            let normalVal = value

            if (key == "name" && !value.length) {
                normalVal = "Untitled"
            }

            if (editingIndex !== -1) {
                state.items[editingIndex] = {
                    ...state.items[editingIndex],
                    updated_date: getNormalizedDate(date),
                    [key]: normalVal
                };
            }
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        toggleWindowOpened: state => {
            state.noteOpened = !state.noteOpened
        },
        setCurrentNoteData: (state, action: PayloadAction<string>) => {
            state.currentNoteData = state.items.find(item => item.id === action.payload) as Note
        },
        resetCurrentNoteData: state => {
            state.currentNoteData = initialState.currentNoteData
        }
    }
})

export const { addNote, editNote, deleteNote, copyNote, resetCurrentNoteData, toggleWindowOpened, setCurrentNoteData } = notesSlice.actions
export const notesReducer = notesSlice.reducer