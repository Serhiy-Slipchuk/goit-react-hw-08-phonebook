import { Link } from 'react-router-dom';
import css from './Logo.module.scss';
import { RiContactsBook2Line } from 'react-icons/ri';

const Logo = function () {
  return (
    <Link to="/" className={css['logo-link']}>
      <div className={css['logo-thumb']}>
        <RiContactsBook2Line className={css['logo-image']} />
        <p className={css['logo-text']}>phonebook</p>
      </div>
    </Link>
  );
};

export default Logo;
