import { useRouter } from 'next/router';
import Footer from '../Footer';
import Nav from '../Nav';

const excludeNav = ["/digi-kite"]
const excludeFooter = ["/contact", "/digi-kite"]

function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      {
        !excludeNav.includes(router.pathname) &&
        <Nav />
      }

      {children}

      {
        !excludeFooter.includes(router.pathname) &&
        <Footer />
      }
    </>
  )
}

export default Layout