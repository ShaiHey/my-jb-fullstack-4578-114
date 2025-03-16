import { configureStore } from "@reduxjs/toolkit";
import { followingSlice } from "./followingSlice";
import { profileSlice } from "./profileSlice";
import { feedSlice } from "./feedSlice";
import { followersSlice } from "./followersSlice";

const store = configureStore({
    reducer: {
        profile: profileSlice.reducer,
        feed: feedSlice.reducer,
        following: followingSlice.reducer,
        followers: followersSlice.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;