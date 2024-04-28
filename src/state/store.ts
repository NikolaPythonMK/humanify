import { configureStore } from "@reduxjs/toolkit";
import allowedFeaturesReducer from '@/state/user/userSlice'


export const store = configureStore({
    reducer: {
        features: allowedFeaturesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;