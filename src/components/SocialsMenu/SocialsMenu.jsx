import css from './SocialsMenu.module.scss';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';

const SocialsMenu = function () {
  return (
    <ul className={css['socials-menu']}>
      <li className={css['socials-item']}>
        <a
          className={css['socials-link']}
          href="https://github.com/Serhiy-Slipchuk/goit-react-hw-08-phonebook"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <BsGithub className={css['socials-icon']} />
        </a>
      </li>
      <li className={css['socials-item']}>
        <a
          className={css['socials-link']}
          href="https://www.linkedin.com/in/serhiy-slipchuk/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <BsLinkedin className={css['socials-icon']} />
        </a>
      </li>
      <li className={css['socials-item']}>
        <a
          className={css['socials-link']}
          href="https://t.me/s_slipchuk"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          <BsTelegram className={css['socials-icon']} />
        </a>
      </li>
    </ul>
  );
};
export default SocialsMenu;
