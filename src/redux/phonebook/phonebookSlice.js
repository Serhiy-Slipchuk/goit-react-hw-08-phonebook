import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './phonebookInitialState';

import {
  getContactsThunk,
  addNewContactThunk,
  deleteContactThunk,
  editContactThunk,
} from './phonebookThunks';

import {
  handlerGetContacts,
  handlerAddNewContact,
  handlerDeleteContact,
  handlerPending,
  handlerError,
  handlerEditContact,
} from './phonebookSliceHandlers';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,

  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlerPending)
      .addCase(getContactsThunk.fulfilled, handlerGetContacts)
      .addCase(getContactsThunk.rejected, handlerError)
      .addCase(addNewContactThunk.pending, handlerPending)
      .addCase(addNewContactThunk.fulfilled, handlerAddNewContact)
      .addCase(addNewContactThunk.rejected, handlerError)
      .addCase(editContactThunk.pending, handlerPending)
      .addCase(editContactThunk.fulfilled, handlerEditContact)
      .addCase(editContactThunk.rejected, handlerError)
      .addCase(deleteContactThunk.pending, handlerPending)
      .addCase(deleteContactThunk.fulfilled, handlerDeleteContact)
      .addCase(deleteContactThunk.rejected, handlerError);
  },
});

export const phonebookReducer = phonebookSlice.reducer;
export const { updateFilter } =
  phonebookSlice.actions;
