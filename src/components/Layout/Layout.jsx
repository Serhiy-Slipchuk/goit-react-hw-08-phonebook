import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Container from 'components/Container/Container';
import { Outlet } from 'react-router-dom';

const Layout = function () {
  return (
    <>
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
