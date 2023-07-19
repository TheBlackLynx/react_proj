import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddNewCommentSchema } from "../types/AddNewCommentSchema";

const initialState: AddNewCommentSchema = {
    // text: '',
    // error: ''
}

export const addNewCommentFormSlice = createSlice({
    name: 'addNewCommentForm',
    initialState,
    reducers: {
        setNewComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        }
    }
}
)
export const { actions: addNewCommentFormActions } = addNewCommentFormSlice
export const { reducer: addNewCommentFormReducer } = addNewCommentFormSlice