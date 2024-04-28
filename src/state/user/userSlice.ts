import { Feature } from "@/interfaces/Feature";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AllowedFeaturesState {
    features: Feature[]
}

const initialState: AllowedFeaturesState = {
    features: []
}

const allowedFeaturesSlice = createSlice({
    name: 'allowedFeatures',
    initialState, 
    reducers: {
        addFeature: (state, action: PayloadAction<Feature>) => {
            state.features.push(action.payload);
        },
        removeFeature: (state, action: PayloadAction<Feature>) => {
            state.features = state.features.filter(f => f.route !== action.payload.route);
        }
    }
})

export const { addFeature, removeFeature } = allowedFeaturesSlice.actions;

export default allowedFeaturesSlice.reducer;