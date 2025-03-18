import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface FeedState {
    posts: Post[]
    postLoaded: boolean
    needReload: boolean
}

const initialState: FeedState = {
    posts: [],
    postLoaded: false,
    needReload: false
}

export const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
            state.postLoaded = true
            state.needReload = false
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.unshift(action.payload)
        },
        addPostToFeed: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts]
        },
        needReload: (state, action: PayloadAction<boolean>) => {
            state.needReload = action.payload
        }
    }
})

export const { init, addComment, addPostToFeed, needReload } = feedSlice.actions;

export default feedSlice.reducer;