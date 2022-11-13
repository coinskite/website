import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Arrow from '../../svg/arrows/down.svg';
import Close from '../../svg/cross.svg';
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
    <nav className='py-4 px-4 xl:px-8 2xl:px-12 sticky top-0 z-[2] bg-[#13111B]'>
      <div className="df gap-4 max-w-7xl mx-auto">
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

        <div
          className="hidden md:flex md:items-center md:gap-4 lg:gap-6 xl:gap-8 py-4 px-6 md:p-0 md:ml-auto fixed md:static inset-0 bg-white text-[#222531] md:bg-inherit md:text-white z-[1]"
          ref={hamRef}
        >
          <div className='flex md:hidden items-center justify-between mb-4 -mr-2'>
            <img className='w-40' src='./img/logo/green.png' alt="logo" />
            <Close className='w-8 h-8' onClick={onClickfn} />
          </div>

          {
            list.map(l => (
              <div
                key={l.title}
                onClick={() => onClk(l.title)}
                className='mb-2 md:mb-0 relative group'
              >
                <div className='df font-semibold cursor-pointer md:py-1'>
                  {l.title}
                  <Arrow
                    className={`ml-auto md:hidden ${active === l.title ? ' rotate-180' : ''}`}
                  />
                </div>

                <div className={`${active === l.title ? "" : "hidden"} md:hidden md:min-w-max md:group-hover:block md:absolute md:top-8 md:bg-[#17171F] md:left-1/2 md:-translate-x-1/2 md:p-4 md:rounded-2xl`}>
                  <div className='hidden md:block md:absolute md:-top-2 md:left-1/2 md:-translate-x-1/2 md:-z-[1] bg-[#17171F] w-4 h-4 rotate-45 rounded-sm'>
                  </div>

                  {
                    l.title === 'Solutions' &&
                    <div className='gradient-text hidden md:block mb-4'>
                      Solutions
                    </div>
                  }

                  <div className={`${l.title === 'Solutions' ? 'md:grid md:grid-cols-3 md:gap-4' : ''}`}>
                    {
                      l.list.map(sl => (
                        <div
                          key={sl.name}
                          className='df gap-4 md:px-2 my-2 text-sm cursor-pointer hover:text-primary-900'
                          onClick={() => navigate(sl.to)}
                        >
                          <img
                            src={sl.img}
                            alt={sl.name}
                            className='hidden md:block w-8 h-8'
                          />
                          {sl.name}
                        </div>
                      ))
                    }
                  </div>

                  {
                    l.title === 'Solutions' &&
                    <div
                      className='gradient-text hidden md:flex md:items-center md:gap-2 mt-2 pt-2 relative cursor-pointer'
                      onClick={() => navigate("/solutions")}
                    >
                      <div className='gradient-bg h-px absolute -inset-x-4 top-0'></div>
                      See all solutions
                      <img
                        className='w-3'
                        src="./img/nav/Solutions/arrow.png"
                        alt="arrow"
                      />
                    </div>
                  }
                </div>
              </div>
            ))
          }

          <button
            className="block w-full h-[61px] max-w-[360px] sm:max-w-[440px] md:h-auto mt-4 md:mt-0 py-1.5 md:px-4 mx-auto font-semibold text-[#222531] bg-primary-900 md:bg-white rounded md:rounded-sm"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav