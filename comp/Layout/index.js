import { useRouter } from 'next/router';
import Footer from '../Footer2';
import Nav from '../Nav2';

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