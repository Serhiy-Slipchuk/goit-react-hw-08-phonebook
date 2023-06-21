import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerUserThunk } from './authThunks';
import { initialState } from './authInitialState';
import {
  handlerPending,
  handlerRegisterAndLogin,
  handlerLogout,
  handlerRegisterError,
  handlerLoginError,
  handlerLogoutError,
} from './authSliceHandlers';

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
      .addCase(logoutThunk.rejected, handlerLogoutError);
  },
});

export const authReducer = authSlice.reducer;
