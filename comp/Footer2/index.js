import { useState } from 'react';
import Link from 'next/link';
import list from './list';

import Arrow from '../../svg/arrows/white.svg';

function Footer() {
  const [active, setActive] = useState("")

  const onClk = val => setActive(pr => val === pr ? "" : val)

  return (
    <footer className="md:grid md:grid-cols-4 py-6 px-4 md:px-12 bg-[#222531]">
      <div className='mb-2'>
        <img src="./img/logo/white.png" alt="logo" />
      </div>

      {
        list.map(l => (
          <div key={l.key} className="dfc">
            {
              l.data.map(d => (
                <div
                  key={d.str}
                  className='mb-1 border-b border-white md:border-none'
                >
                  <ul className={active === d.str ? "active" : ""}>
                    <li onClick={() => onClk(d.str)}>
                      <strong className='df text-[22px] sm:text-[25px] lg:text-[30px] xl:text-[35px] text-[#F5F5F5] cursor-pointer'>
                        {d.str}
                        <Arrow className="head-arr ml-auto md:hidden" />
                      </strong>
                    </li>
                    {
                      d.links.map(li => (
                        <li
                          key={li.title}
                          className="need"
                        >
                          <Link href={li.link}>
                            <a className='text-xs lg:text-lg xl:text-[22px] text-white opacity-50 hover:opacity-100'>
                              {li.title}
                            </a>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        ))
      }

      <div className='grid-col-full hidden md:flex items-center gap-4 mt-4 pr-12 pt-4 border-t-2 border-primary-900'>
        <p className='flex-1 text-white opacity-50'>@Copyright 2022,Coinskite Pvt. Ltd.All rights reserved</p>
        <a href="https://twitter.com/coinskite?s=08" rel="noreferrer" target="_blank">
          <img
            className='w-10 h-10'
            src="./img/footer/twitter.png"
            alt="twiter"
          />
        </a>
        <a href="https://www.linkedin.com/in/coins-kite" rel="noreferrer" target="_blank">
          <img
            className='w-10 h-10'
            src="./img/footer/ln.png"
            alt="linkedin"
          />
        </a>
        <a href="https://m.facebook.com/coinskite.coinskite" rel="noreferrer" target="_blank">
          <img
            className='w-10 h-10'
            src="./img/footer/fb.png"
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com/coinskite" rel="noreferrer" target="_blank">
          <img
            className='w-10 h-10'
            src="./img/footer/insta.png"
            alt="instagram"
          />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img
            className='w-10 h-10'
            src="./img/footer/Whatsapp.png"
            alt="Whatsapp"
          />
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <img
            className='w-10 h-10'
            src="./img/footer/medium.png"
            alt="Medium"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer