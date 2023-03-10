import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../type/ScrollSaveSchema";

const initialState: ScrollSaveSchema = {
    scroll: {}
}

export const ScrollSaveSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPositiont: (state, {payload}: PayloadAction<{path: string; position: number}>) => {
            state.scroll[payload.path] = payload.position
        }
    },
    extraReducers: (builder) => {
    }
}
)
export const { actions: scrollActions } = ScrollSaveSlice
export const { reducer: scrollReducer } = ScrollSaveSlice