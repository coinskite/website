import { useRouter } from 'next/router';
import Footer from '../Footer';
import Nav from '../Nav';

function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <Nav />
      {children}
      {
        router.pathname !== "/contact" &&
        <Footer />
      }
    </>
  )
}

export default Layout