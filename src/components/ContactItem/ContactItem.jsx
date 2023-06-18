import css from './ContactItem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from 'redux/phonebookThunks';
import PropTypes from 'prop-types';
import ButtonSmall from 'components/ButtonSmall/ButtonSmall';

const ContactItem = function ({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>{name}</p>
      <p className={css.phoneText}>{number}</p>
      <ButtonSmall type="button" text="Edit" id={id} handler={() => {}} />
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
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
