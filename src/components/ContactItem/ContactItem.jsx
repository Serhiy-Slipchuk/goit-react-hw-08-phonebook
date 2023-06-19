import css from './ContactItem.module.scss';
import { useDispatch } from 'react-redux';
import {
  deleteContactThunk,
  editContactThunk,
  getContactsThunk,
} from 'redux/phonebookThunks';
import PropTypes from 'prop-types';
import ButtonSmall from 'components/ButtonSmall/ButtonSmall';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const ContactItem = function ({ name, number, id }) {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handlerCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlerSubmitEditForm = event => {
    event.preventDefault();
    setIsModalOpen(false);

    const editedContact = {
      id,
      name: updatedName,
      number: updatedNumber,
    };
    dispatch(editContactThunk({ id, editedContact }));
  };

  const handlerInputChange = event => {
    if (event.target.name === 'name') {
      setUpdatedName(event.target.value);
    }
    if (event.target.name === 'number') {
      setUpdatedNumber(event.target.value);
    }
  };

  return (
    <>
      <li className={css.contactItem}>
        <p className={css.contactText}>{name}</p>
        <p className={css.phoneText}>{number}</p>
        <ButtonSmall
          type="button"
          text="Edit"
          id={id}
          handler={() => {
            setIsModalOpen(true);
          }}
        />
        <ButtonSmall
          type="button"
          text="Delete"
          id={id}
          handler={() => {
            dispatch(deleteContactThunk(id));
            dispatch(getContactsThunk());
          }}
        />
      </li>
      {isModalOpen && (
        <Modal
          currentName={updatedName}
          currentNumber={updatedNumber}
          handlerInputChange={handlerInputChange}
          handlerSubmit={handlerSubmitEditForm}
          closeModal={handlerCloseModal}
        />
      )}
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
