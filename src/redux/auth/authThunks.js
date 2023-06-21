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
      console.log('data register', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      console.log('login data', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      token.unset();
      console.log('data logout', data);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);