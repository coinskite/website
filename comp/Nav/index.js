import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Arrow from '../../svg/arrows/down.svg';
import Lines from '../../svg/lines.svg';
import Link from 'next/link';
import list from './list';

function Nav() {
  const [active, setActive] = useState("")
  const router = useRouter()
  const hamRef = useRef()

  const navigate = to => router.push(to)
  const onClk = val => setActive(pr => val === pr ? "" : val)

  const onClickfn = () => {
    hamRef.current.classList.toggle("hidden")
  }

  return (
    <nav className="df gap-4 py-4 px-4 xl:px-8 2xl:px-12 sticky top-0 z-[2] bg-[#13111B]">
      <div className="nav-logo">
        <Link href="/">
          <a>
            <img className='w-40' src='./img/logo/logo.png' alt="logo" />
          </a>
        </Link>
      </div>

      <div className='ml-auto md:hidden' onClick={onClickfn}>
        <Lines />
      </div>

      <div className="hidden md:flex md:items-center md:gap-4 py-4 px-6 md:p-0 md:ml-auto fixed md:static inset-0 top-14 bg-white text-[#222531] md:bg-inherit md:text-white z-[1]" ref={hamRef}>
        {
          list.map(l => (
            <div
              key={l.title}
              onClick={() => onClk(l.title)}
              className='mb-2 relative group'
            >
              <div className='df cursor-pointer font-bold'>
                {l.title}
                <Arrow
                  className={`ml-auto md:hidden ${active === l.title ? ' rotate-180' : ''}`}
                />
              </div>

              <div className={`${active === l.title ? "" : "hidden"} md:hidden md:group-hover:block md:absolute md:top-8 md:bg-[#17171F] md:left-1/2 md:-translate-x-1/2 md:p-4`}>
                {
                  l.title === 'Solutions' &&
                  <div className='hidden md:block'>
                    Solutions
                  </div>
                }

                <div className={`${l.title === 'Solutions' ? 'md:min-w-[350px] md:grid md:grid-cols-3 md:gap-4' : ''}`}>
                  {
                    l.list.map(sl => (
                      <div
                        key={sl.name}
                        className='df my-1'
                      >
                        <img
                          src={sl.img}
                          alt={sl.name}
                          className='hidden md:block w-6 h-6'
                        />
                        {sl.name}
                      </div>
                    ))
                  }
                </div>

                {
                  l.title === 'Solutions' &&
                  <div className='hidden md:block'>
                    See all solutions
                  </div>
                }
              </div>
            </div>
          ))
        }

        <button
          className="w-full mt-4 md:mt-0 py-2 md:py-0.5 md:px-3 text-[#222531] bg-primary-900 md:bg-white rounded md:rounded-sm"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </nav>
  )
}

export default Nav