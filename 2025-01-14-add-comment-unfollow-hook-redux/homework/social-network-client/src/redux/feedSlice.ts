import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";

interface FeedState {
    posts: Post[]
}

const initialState: FeedState = {
    posts: []
}

export const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        }
    }
})

export const { init } = feedSlice.actions;

export default feedSlice.reducer;