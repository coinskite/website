import Footer from "./footer";
import Nav from "./nav";

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