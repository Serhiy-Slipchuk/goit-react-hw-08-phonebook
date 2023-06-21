import axios from 'axios';

axios.defaults.baseURL='https://connections-api.herokuapp.com'

export const getContacts = async function () {
  const data = await axios('/contacts');
  return data;
};

export const addContact = async function (newContact) {
  const data = await axios.post('/contacts', newContact);
  return data;
};

export const editContact = async function ({ id, editedContact }) {
  const data = await axios.patch(`/contacts/${id}`, editedContact);
  return data;
};

export const deleteContact = async function (id) {
  const data = await axios.delete(`contacts/${id}`);
  return data;
};
