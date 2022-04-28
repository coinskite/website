import { useRef } from 'react';
import { useRouter } from 'next/router';
import Lines from '../../svg/lines.svg';
import Link from 'next/link';

function Nav() {
  const router = useRouter()
  const hamRef = useRef()

  const navigate = to => router.push(to)

  const onClickfn = () => {
    hamRef.current.classList.toggle("open")
  }

  return (
    <>
      <nav className="df gap1">
        <div className="nav-logo">
          <Link href="/">
            <a>
              <img src='./img/home/logo.png' alt="logo" />
            </a>
          </Link>
        </div>

        <div className="df flex1 nav-links" ref={hamRef}>
          <p>Services</p>
          <p>Solutions</p>
          <p>Partners</p>
          <p>Company</p>
          <p>Resources</p>
          <p>Blog</p>
        </div>

        <button
          className="nav-btn p-8-16"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>

        <div id="hamburger" onClick={onClickfn}>
          <Lines className="hamburger-svg" />
        </div>
      </nav>
    </>
  )
}

export default Nav
