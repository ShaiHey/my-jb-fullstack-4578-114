import { configureStore } from "@reduxjs/toolkit";
import { giftState } from "./giftslice";
import { audienceState } from "./audienceSlice";

const store = configureStore({
    reducer: {
        gifts: giftState.reducer,
        audiences: audienceState.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;