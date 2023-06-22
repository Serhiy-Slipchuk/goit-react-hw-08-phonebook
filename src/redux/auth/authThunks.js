import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserThunk = createAsyncThunk(
  'auth/registerUser',
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', newUser);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message ||
          `${error.response.data.name}. User with email "${error.response.data.keyValue.email}" have already registered`
      );
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'auth/getCurrentUser',
  async (localStorageTOKEN, { rejectWithValue }) => {
    try {
      token.set(localStorageTOKEN);
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
