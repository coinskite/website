import Footer from '../Footer2';
import Nav from '../Nav2';

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