import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/phonebook/phonebookSelectors';
import { nanoid } from 'nanoid';
import { addNewContactThunk } from 'redux/phonebook/phonebookThunks';
import Input from 'components/Input/Input';
import css from './ContactsForm.module.scss';
import ButtonLarge from 'components/ButtonLarge/ButtonLarge';

const ContactsForm = function () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsList = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const getExistNames = () => {
    return contactsList.map(({ name }) => name);
  };

  const handlerInputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handlerSubmitForm = event => {
    event.preventDefault();

    if (!getExistNames().includes(name)) {
      const newContact = {
        id: nanoid(5),
        name,
        number,
      };
      setName('');
      setNumber('');
      dispatch(addNewContactThunk(newContact));
    } else {
      window.alert(`${name} is already in contacts.`);
    }
  };

  return (
    <form className={css.form} onSubmit={e => handlerSubmitForm(e)}>
      <Input
        label="Name"
        type="text"
        name="name"
        value={name}
        handler={handlerInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required={true}
      />
      <Input
        label="Phone number"
        type="tel"
        name="number"
        value={number}
        handler={handlerInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required={true}
      />
      <ButtonLarge type="submit" text="Add contact" />
    </form>
  );
};

export default ContactsForm;
