import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TargetAudience from "../models/TargetAudience";

interface AudienceState {
    audience: TargetAudience[]
}

const initialState: AudienceState = {
    audience: [],
}

export const audienceState = createSlice({
    name: "audience",
    initialState,
    reducers: {
        init: (state, action: PayloadAction<TargetAudience[]>) => {
            state.audience = action.payload
        }
    }
})

export const { init } = audienceState.actions;

export default audienceState.reducer;