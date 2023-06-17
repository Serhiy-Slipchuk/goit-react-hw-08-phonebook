import Logo from 'components/Logo/Logo';
import css from './Header.module.scss';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';

const Header = function () {
  return (
    <header className={css.header}>
      <Container>
        <div className={css['header-thumb']}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
