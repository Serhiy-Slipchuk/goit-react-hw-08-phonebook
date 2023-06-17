import css from './Footer.module.scss';
import Container from 'components/Container/Container';

const Footer = function () {
  return (
    <footer className={css.footer}>
      <Container>
        <p className={css.copyright}>2023 All rights reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
