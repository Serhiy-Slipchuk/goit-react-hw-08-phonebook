import { useState } from 'react';
import ButtonLarge from 'components/ButtonLarge/ButtonLarge';
import Input from 'components/Input/Input';
import css from './FormLogin.module.scss';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authThunks';

const FormLogin = function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

  const handlerInputChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    dispatch(loginThunk(user));
    setEmail('');
    setPassword('');
  }

  return (
    <form className={css['login-form']} onSubmit={handlerSubmitForm}>
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
      <ButtonLarge type="submit" text="Log In" />
    </form>
  );
};

export default FormLogin;
