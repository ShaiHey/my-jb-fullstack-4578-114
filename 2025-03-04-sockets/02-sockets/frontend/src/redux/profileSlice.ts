import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Post from "../models/post/Post";
import Comment from "../models/comment/Comment";

interface ProfileState {
    posts: Post[]
    postLoaded: boolean
    newPostId: string
}

const initialState: ProfileState = {
    posts: [],
    postLoaded: false,
    newPostId: ""
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
            state.postLoaded = true
        },
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts = [action.payload, ...state.posts]
            state.newPostId = action.payload.id
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
        },
        initialNewPost: (state) => {
            state.newPostId = ""
        }
    }
})

export const { init, addPost, removePost, update, addComment, initialNewPost } = profileSlice.actions;

export default profileSlice.reducer;