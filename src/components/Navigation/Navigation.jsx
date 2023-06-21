import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/authSelectors';

const Navigation = function () {
  const user = useSelector(userSelector);

  return (
    <nav className={css['navigation']}>
      {user.name && user.email && (
        <ul className={css['main-menu']}>
          <li className={css['nav-item']}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css['nav-link-active'] : css['nav-link']
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css['nav-item']}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css['nav-link-active'] : css['nav-link']
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      )}

      {user.name && user.email && <UserMenu />}

      {!user.name && !user.email && (
        <ul className={css['auth-menu']}>
          <li className={css['nav-item']}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css['nav-link-active'] : css['nav-link']
              }
              to="/login"
            >
              Log IN
            </NavLink>
          </li>
          <li className={css['nav-item']}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css['nav-link-active'] : css['nav-link']
              }
              to="/register"
            >
              Sign UP
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
