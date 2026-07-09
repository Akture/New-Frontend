import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import videoReducer from './videoSlice';

export const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
    video: videoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['video/download/fulfilled'],
        ignoredActionPaths: ['payload'],
        ignoredPaths: ['video.blob'],
      },
    }),
});
