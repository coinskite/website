import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Lines from '../../svg/lines.svg';
import Title from './Title';

function Nav() {
  const [active, setActive] = useState("")
  const observerRef = useRef(null)
  const wrapperRef = useRef(null)
  const router = useRouter()
  const hamRef = useRef()

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }
    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        wrapperRef.current.classList.remove("change")
      } else {
        wrapperRef.current.classList.add("change")
      }
    }, options)

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [observerRef])

  const onClickfn = () => {
    hamRef.current.classList.toggle("open")
  }

  const updateAct = title => setActive(prev => title === prev ? "" : title)

  const navigate = to => router.push(to)

  const specialNav = () => {
    const { _id, application = false } = router.query
    if (!application) return router.push(`${_id}?application=true`)
  }

  return (
    <>
      <div ref={observerRef}></div>

      <nav className="df gap1" ref={wrapperRef}>
        <div className="nav-logo">
          <Link href="/">
            <a>
              <img src='./img/logo/black.png' alt="logo" className="logo-black" />
              <img src="./img/logo/white.png" alt="logo" className="logo-white" />
            </a>
          </Link>
        </div>

        <div className="df flex1 links" ref={hamRef}>
          {
            (router.pathname === "/application" || router.pathname === "/hire/[_id]") &&
            <>
              <div className='cp' onClick={() => navigate(router.query._id)}>Overview</div>
              <div className='cp' onClick={specialNav}>Application</div>
            </>
          }

          {
            router.pathname !== "/application" && router.pathname !== "/hire/[_id]" &&
            <>
              <Title title="Services" active={active} updateAct={updateAct}>
                <div className="grid-2 nav-min-w nav-dd-pad">
                  <div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />Blockchain development</div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />Smart contract Development</div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />Defi</div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />Tokenization</div>
                  </div>

                  <div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />Blockchain consultancy</div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />Smart contract audit</div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />NFT</div>
                    <div className="df nav-info-line" onClick={() => navigate("/services")}><img src="./img/api.png" alt="api" />ICO | STO | IDO</div>
                  </div>
                </div>
              </Title>

              <Title title="Solutions" active={active} updateAct={updateAct}>
                <div className="grid-2 nav-min-w nav-dd-pad">
                  <div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Finance</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Insurance</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Real Estate</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Law</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Social media</div>
                  </div>

                  <div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Healthcare</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Media</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Sports</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Supplychain</div>
                    <div className="df nav-info-line" onClick={() => navigate("/solutions")}><img src="./img/api.png" alt="api" /> Government</div>
                  </div>
                </div>
              </Title>

              <Title title="Company" active={active} updateAct={updateAct}>
                <div className="nav-dd-pad">
                  <div className="df nav-info-line" onClick={() => navigate("/about")}><img src="./img/api.png" alt="api" /> About</div>
                  <div className="df nav-info-line" onClick={() => navigate("/career")}><img src="./img/api.png" alt="api" /> Careers</div>
                </div>
              </Title>

              <Title title="Resourses" active={active} updateAct={updateAct}>
                <div className="grid-2 nav-min-w nav-dd-pad">
                  <div>
                    <div className="df nav-info-line" onClick={() => navigate("/guide")}><img src="./img/api.png" alt="api" /> Guide</div>
                    <div className="df nav-info-line"><img src="./img/api.png" alt="api" /> Podcast</div>
                    <div className="df nav-info-line"><img src="./img/api.png" alt="api" /> Help& Support</div>
                  </div>

                  <div>
                    <div className="df nav-info-line" onClick={() => navigate("/webinar")}><img src="./img/api.png" alt="api" /> Webinars</div>
                    <div className="df nav-info-line"><img src="./img/api.png" alt="api" /> API & Docs</div>
                  </div>
                </div>
              </Title>

              <Title title="Partners" active={active} updateAct={updateAct}>
                <div className="nav-dd-pad">
                  <div className="df nav-info-line"><img src="./img/api.png" alt="api" /> Partners</div>
                  <div className="df nav-info-line"><img src="./img/api.png" alt="api" /> Financial advisors</div>
                </div>
              </Title>

              <div><a href='https://blog.coinskite.com'>Blog</a></div>
            </>
          }

          <button
            className="nav-btn br5 p-8-16"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </div>

        <div id="hamburger" onClick={onClickfn}>
          <Lines />
        </div>
      </nav>
    </>
  )
}

export default Nav
