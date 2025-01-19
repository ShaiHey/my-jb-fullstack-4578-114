import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Comment from "../models/comment/Comment";

interface CommentsState {
    comments: Comment[]
}

const initialState: CommentsState = {
    comments: []
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload
        }
    }
})

export const { init } = commentsSlice.actions;

export default commentsSlice.reducer;