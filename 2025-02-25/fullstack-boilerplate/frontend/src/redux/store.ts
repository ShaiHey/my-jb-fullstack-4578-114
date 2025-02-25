import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profileSlice";

const store = configureStore({
    reducer: { // [ Slices here ]
        profile: profileSlice.reducer,
        // feed: feedSlice.reducer,
        // following: followingSlice.reducer,
        // followers: followersSlice.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;