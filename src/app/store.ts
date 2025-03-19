import { configureStore } from "@reduxjs/toolkit"
import { mainReducer } from "./features/main/mainSlice"
import { currentNoteReducer } from "./features/current-note/currentNoteSlice"

export const store = configureStore({
    reducer: {
        main: mainReducer,
        currentNote: currentNoteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch