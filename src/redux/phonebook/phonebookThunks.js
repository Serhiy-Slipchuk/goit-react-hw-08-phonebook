import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  editContact,
} from 'phonebookAPI';

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  async () => {
    const data = await getContacts();
    return data;
  }
);

export const addNewContactThunk = createAsyncThunk(
  'phonebook/addNewContact',
  async newContact => {
    console.log('ADD THUNK NEW CONTACT', newContact);
    const data = await addContact(newContact);
    return data;
  }
);

export const editContactThunk = createAsyncThunk(
  'phonebook/editContact',
  async ({ id, editedContact }) => {
    const data = await editContact({ id, editedContact });
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    const data = await deleteContact(id);
    return data;
  }
);
