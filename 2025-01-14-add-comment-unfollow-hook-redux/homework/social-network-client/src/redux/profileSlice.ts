import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";

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
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if(index > -1) {
                state.posts.splice(index, 1)
            }
        }
    }
})

export const { init } = profileSlice.actions;

export default profileSlice.reducer;