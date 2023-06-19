import css from './Modal.module.scss';
import Input from 'components/Input/Input';
import ButtonLarge from 'components/ButtonLarge/ButtonLarge';
import Heading from 'components/Heading/Heading';
import PropTypes from 'prop-types';

const Modal = function ({
  currentName,
  currentNumber,
  handlerInputChange,
  handlerSubmit,
  closeModal,
}) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <Heading tag="h3" text="Edit contact" />
        <form className={css.form} onSubmit={handlerSubmit}>
          <Input
            label="Name"
            type="text"
            name="name"
            value={currentName}
            handler={handlerInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required={true}
          />
          <Input
            label="Phone number"
            type="tel"
            name="number"
            value={currentNumber}
            handler={handlerInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required={true}
          />
          <div className={css['buttons-thumb']}>
            <ButtonLarge type="submit" text="Confirm" />
            <ButtonLarge type="button" text="Chancel" handler={closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  currentName: PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired,
  handlerInputChange: PropTypes.func.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
