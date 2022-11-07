import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';



export const fetchContacts = createAsyncThunk(
  'contacts/fetchContact',

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',

  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      toast.success('Contact successfully added!');
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',

  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success('Contact successfully deleted!');
      return id;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',

  async ({id,name,number}, { rejectWithValue }) => {
    try {
      await axios.patch(`/contacts/${id}`,{name,number});
      toast.success('Contact successfully updated!');
      return {id,name,number};
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);