import css from './UserMenu.module.scss';
import { FaUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/authThunks';

const UserMenu = function () {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handlerLogoutBtn = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css['user-menu']}>
      <FaUserCircle className={css['user-avatar']} />
      <div className={css['user-info']}>
        <p className={css['user-text']}>Hello, {user.name}</p>
        <p className={css['user-text']}>{user.email}</p>
      </div>
      <button
        className={css['logout']}
        type="button"
        onClick={handlerLogoutBtn}
      >
        <MdLogout className={css['logout-icon']} />
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
