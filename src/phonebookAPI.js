import axios from 'axios';

const BASE_URL = 'https://6487a5c2beba62972790deef.mockapi.io/contacts';

export const getContacts = async function () {
  const data = await axios(BASE_URL);
  return data;
};

export const addContact = async function (newContact) {
  const data = await axios.post(BASE_URL, newContact);
  return data;
};

export const editContact = async function ({ id, editedContact }) {
  const data = await axios.put(`${BASE_URL}/${id}`, editedContact);
  return data;
};

export const deleteContact = async function (id) {
  const data = await axios.delete(`${BASE_URL}/${id}`);
  return data;
};
