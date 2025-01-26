import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/user/User";

interface FollowersState {
    followers: User[];
    followersLoaded: boolean
}

const initialState: FollowersState = {
    followers: [],
    followersLoaded: false
}

export const followersSlice = createSlice({
    name: "followers",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<User[]>) => {
            state.followers = action.payload
            state.followersLoaded = true
        }
    }
})

export const {init} =  followersSlice.actions;

export default followersSlice.reducer;