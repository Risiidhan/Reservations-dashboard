import { configureStore } from '@reduxjs/toolkit';

// Dummy reducer (no-op)
const dummyReducer = (state = {}, action: any) => state;
export const store = configureStore({
  reducer: {
    // Add slices here
    dummy: dummyReducer,
  },
});

// Types for usage in app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
