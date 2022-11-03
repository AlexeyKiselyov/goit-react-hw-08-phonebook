import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// =========================================

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        dataUser
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (dataUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        dataUser
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.massege);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('https://connections-api.herokuapp.com/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenPersist = getState().auth.token;
    if (!tokenPersist) return rejectWithValue();
    token.set(tokenPersist);

    try {
      const { data } = await axios(
        'https://connections-api.herokuapp.com/users/current'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
