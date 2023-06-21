import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook/phonebookSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: authReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [],
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          'payload.headers',
          'payload.config.transformRequest.0',
          'payload.config.transformResponse.0',
          'payload.config.env.FormData',
          'payload.config.env.Blob',
          'payload.config.validateStatus',
          'payload.config.headers',
          'payload.request',
          'payload.timestamp',
        ],
        // Ignore these paths in the state
        ignoredPaths: [],
      },
    }),
});
