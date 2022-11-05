import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshCurrentUser, register } from './authOperations';
// =========================================

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      state.error=null;
    },
    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [login.pending]: (state) => {
      state.isLoading = true;
      state.error=null;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [logout.pending]: (state) => {
      state.isLoading = true;
      state.error=null;
    },
    [logout.fulfilled]: (state) => {
      state.user = {name:'',email:''};
      state.token = null;
      state.isLoading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [refreshCurrentUser.pending]: (state) => {
      state.isLoading = true;
      state.isRefreshingCurrentUser=true;
      state.error=null;
    },
    [refreshCurrentUser.fulfilled]: (state,{payload}) => {
      state.user = payload;
      state.isRefreshingCurrentUser=false;
      state.isLoading = false;
    },
    [refreshCurrentUser.rejected]: (state, { payload }) => {
      state.token = null;
      state.error = payload;
      state.isRefreshingCurrentUser=false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
