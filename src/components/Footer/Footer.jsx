import SocialsMenu from 'components/SocialsMenu/SocialsMenu';
import css from './Footer.module.scss';
import Container from 'components/Container/Container';

const Footer = function () {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css['footer-thumb']}>
        <p className={css.copyright}>&#169; 2023 All rights reserved</p>
        <SocialsMenu />
        </div>
        
      </Container>
    </footer>
  );
};

export default Footer;
