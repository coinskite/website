import Footer from '../Footer2';
import Nav from '../Nav';

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout