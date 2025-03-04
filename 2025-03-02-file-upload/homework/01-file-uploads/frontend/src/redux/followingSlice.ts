import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";

interface FollowingState {
    following: User[];
    followingLoaded: boolean;
}

const initialState: FollowingState = {
    following: [],
    followingLoaded: false
}

export const followingSlice = createSlice({
    name: "following",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.following = action.payload
            state.followingLoaded = true
        },
        unfollow: (state, action: PayloadAction<{userId: string}>) => {
            state.following = state.following.filter(f => f.id !== action.payload.userId)
        },
        follow: (state, action: PayloadAction<User>) => {
            state.following.push(action.payload)
        }
    }
})

export const {init, unfollow, follow} =  followingSlice.actions;

export default followingSlice.reducer;