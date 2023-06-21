export const handlerGetContacts = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload.data;
  state.contacts.error = '';
};

export const handlerAddNewContact = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = [...state.contacts.items, payload.data];
  state.contacts.error = '';
};

export const handlerEditContact = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.map(contact => {
    if (contact.id === payload.data.id) {
      contact.name = payload.data.name;
      contact.number = payload.data.number;
      return contact;
    } else {
      return contact;
    }
  });
  state.contacts.error = '';
};

export const handlerDeleteContact = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== payload.data.id
  );
  state.contacts.error = '';
};

export const handlerPending = state => {
  state.contacts.isLoading = true;
};

export const handlerError = (state, { error }) => {
  state.contacts.isLoading = false;
  state.contacts.error = error.message;
};
