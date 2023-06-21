import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerUserThunk } from './authThunks';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: {},
    isLoading: false,
    error: '',
  },

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
      })
      .addCase(loginThunk.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
      } )
      .addCase(logoutThunk.fulfilled, state => {
        state.token = '';
        state.user = {};
        state.error = '';
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
