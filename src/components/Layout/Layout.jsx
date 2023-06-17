import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Container from 'components/Container/Container';
import { Outlet } from 'react-router-dom';

const Layout = function () {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
