import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Gift from "../models/gifts/Gift";

interface GiftState {
    gifts: Gift[]
}

const initialState: GiftState = {
    gifts: [],
}

export const giftState = createSlice({
    name: "gifts",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Gift[]>) => {
            state.gifts = action.payload
        },
        addGift: (state, action: PayloadAction<Gift>) => {
            state.gifts = [action.payload, ...state.gifts]
        },
        deleteGift: (state, action: PayloadAction<{id: string}>) => {
            state.gifts = state.gifts.filter(g => g.id !== action.payload.id)
        }
    }
})

export const { init, addGift, deleteGift } = giftState.actions;

export default giftState.reducer;