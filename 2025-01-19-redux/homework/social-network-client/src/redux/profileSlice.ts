import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface ProfileState {
    posts: Post[]
}

const initialState: ProfileState = {
    posts: []
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        },
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts]
        },
        removePost: (state, action: PayloadAction<{id: string}>) => {
            state.posts = state.posts.filter(p => p.id !== action.payload.id)
        },
        update: (state, action: PayloadAction<Post>) => {
            const index = state.posts.findIndex(p => p.id === action.payload.id);
            if(index > -1) {
                state.posts[index] = action.payload
            }
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.posts.find(p => p.id === action.payload.postId)?.comments.unshift(action.payload)
        }
    }
})

export const { init, addPost, removePost, update, addComment } = profileSlice.actions;

export default profileSlice.reducer;