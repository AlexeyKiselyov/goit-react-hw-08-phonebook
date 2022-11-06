import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
  updateContact,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [addContacts.pending]: state => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
      state.isLoading = false;
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [deleteContacts.pending]: state => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },
    [deleteContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [updateContact.pending]: state => {
      state.isLoading = true;
    },

    [updateContact.fulfilled]: (state, { payload }) => {
      const index = state.contacts.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts[index] = payload;
      state.isLoading = false;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
