import { configureStore } from "@reduxjs/toolkit"
import { mainReducer } from "./features/main/mainSlice"
import { notesReducer } from "./features/notes/notesSlice"
import { searchReducer } from "./features/search/searchSlice"

export const store = configureStore({
    reducer: {
        main: mainReducer,
        notes: notesReducer,
        search: searchReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch