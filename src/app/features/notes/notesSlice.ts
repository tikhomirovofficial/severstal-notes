import { createSlice } from '@reduxjs/toolkit'
import { Note } from '../../../types/entities'
import { getNormalizedDate } from '../../../utils/getNormalizedDate'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getFromStorage } from '../../../utils/localStorageManager'

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
    items: getFromStorage("notes") || [],
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
            const date = new Date();
            const normalizedDate = getNormalizedDate(date)

            state.items = [
                ...state.items,
                {
                    id: Date.now().toString(),
                    name: "Untitled",
                    created_date: normalizedDate,
                    updated_date: normalizedDate,
                    content: ""
                }
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

            if (editingIndex !== -1) {
                // Обновляем только тот объект, который необходимо изменить
                state.items[editingIndex] = {
                    ...state.items[editingIndex],
                    updated_date: getNormalizedDate(date),
                    [key]: value
                };
            }
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            console.log(action.payload);

            state.items = state.items.filter(item => item.id !== action.payload)
        },
        toggleWindowOpened: state => {
            state.noteOpened = !state.noteOpened
        },
        setCurrentNoteData: (state, action: PayloadAction<Note>) => {
            state.currentNoteData = action.payload
        }
    },
})

export const { addNote, editNote, deleteNote, copyNote, toggleWindowOpened, setCurrentNoteData } = notesSlice.actions
export const notesReducer = notesSlice.reducer