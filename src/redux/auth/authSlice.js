import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerUserThunk } from './authThunks';
import { initialState } from './authInitialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
    })
      .addCase(loginThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = '';
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = `${payload}. Invalid user's email or password`;
      } )
      .addCase(logoutThunk.fulfilled, state => {
        state.token = '';
        state.user = {};
        state.error = '';
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
