import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface FeedState {
    posts: Post[]
    needReload: boolean
}

const initialState: FeedState = {
    posts: [],
    needReload: false
}

export const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.unshift(action.payload)
        },
        needReload: (state, action: PayloadAction<boolean>) => {
            state.needReload = action.payload
        }
    }
})

export const { init, addComment, needReload } = feedSlice.actions;

export default feedSlice.reducer;