import {  NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';

const Navigation = function () {
  return (
    <nav className={css['navigation']}>
      <ul className={css['main-menu']}>
        <li className={css['nav-item']}>
          <NavLink className={({ isActive }) => isActive ? css['nav-link-active'] : css['nav-link']} to="/">Home</NavLink>
        </li>
        <li className={css['nav-item']}>
          <NavLink className={({ isActive }) => isActive ? css['nav-link-active'] : css['nav-link']} to="/contacts">Contacts</NavLink>
        </li>
      </ul>
      <ul className={css['auth-menu']}>
        <li className={css['nav-item']}>
          <NavLink className={({ isActive }) => isActive ? css['nav-link-active'] : css['nav-link']} to="/login">Log IN</NavLink>
        </li>
        <li className={css['nav-item']}>
          <NavLink className={({ isActive }) => isActive ? css['nav-link-active'] : css['nav-link']} to="/register">Sign UP</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
