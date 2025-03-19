import { configureStore } from "@reduxjs/toolkit"
import { mainReducer } from "./features/main/mainSlice"
import { notesReducer } from "./features/notes/notesSlice"

export const store = configureStore({
    reducer: {
        main: mainReducer,
        notes: notesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch