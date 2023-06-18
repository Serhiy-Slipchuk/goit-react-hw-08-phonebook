import { useState } from 'react';
import ButtonLarge from 'components/ButtonLarge/ButtonLarge';
import Input from 'components/Input/Input';
import css from './FormLogin.module.scss';

const FormLogin = function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerInputChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <form className={css['login-form']}>
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
