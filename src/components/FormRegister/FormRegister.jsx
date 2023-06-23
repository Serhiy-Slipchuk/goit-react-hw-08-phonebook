import { useState } from 'react';
import css from './FormRegister.module.scss';
import Input from 'components/Input/Input';
import ButtonLarge from 'components/ButtonLarge/ButtonLarge';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/auth/authThunks';
import PropTypes from 'prop-types';

const FormRegister = function ({ handlerPassError }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');

  const dispatch = useDispatch();

  const handlerInputChange = event => {
    if (event.target.name === 'name') {
      setUserName(event.target.value);
    }
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
    if (event.target.name === 're-entered-password') {
      setReEnteredPassword(event.target.value);
    }
  };

  const handlerSubmitForm = event => {
    event.preventDefault();
    handlerPassError('');
    if (password !== reEnteredPassword) {
      handlerPassError(
        `Your re-entered password "${reEnteredPassword}" is not correct`
      );
      return;
    }
    const newUser = {
      name: userName,
      email,
      password,
    };
    dispatch(registerUserThunk(newUser));
    setUserName('');
    setEmail('');
    setPassword('');
    setReEnteredPassword('');
  };

  return (
    <form className={css['register-form']} onSubmit={handlerSubmitForm}>
      <Input
        label="User Name"
        type="text"
        name="name"
        value={userName}
        handler={handlerInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required={true}
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        value={email}
        handler={handlerInputChange}
        required={true}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={password}
        handler={handlerInputChange}
        required={true}
      />
      <Input
        label="Re-enter password"
        type="password"
        name="re-entered-password"
        value={reEnteredPassword}
        handler={handlerInputChange}
        required={true}
      />
      <ButtonLarge type="submit" text="Create an Account" />
    </form>
  );
};

FormRegister.propTypes = {
  handlerPassError: PropTypes.func.isRequired,
};

export default FormRegister;
