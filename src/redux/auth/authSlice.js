import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  loginThunk,
  logoutThunk,
  registerUserThunk,
} from './authThunks';
import { initialState } from './authInitialState';
import {
  handlerPending,
  handlerRegisterAndLogin,
  handlerLogout,
  handlerRegisterError,
  handlerLoginError,
  handlerLogoutError,
  handlerGetCurrentUser,
} from './authSliceHandlers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, handlerPending)
      .addCase(registerUserThunk.fulfilled, handlerRegisterAndLogin)
      .addCase(registerUserThunk.rejected, handlerRegisterError)
      .addCase(loginThunk.pending, handlerPending)
      .addCase(loginThunk.fulfilled, handlerRegisterAndLogin)
      .addCase(loginThunk.rejected, handlerLoginError)
      .addCase(logoutThunk.fulfilled, handlerLogout)
      .addCase(logoutThunk.rejected, handlerLogoutError)
      .addCase(getCurrentUserThunk.fulfilled, handlerGetCurrentUser)
      .addCase(getCurrentUserThunk.rejected, handlerLogout);
  },
});

const persistConfig = {
  key: 'tokenPHONEBOOK',
  storage,
  whitelist: ['token'],
};

export const authReducerPersisted = persistReducer(
  persistConfig,
  authSlice.reducer
);
