"use client";
import { useState } from 'react';

import { Company, Services, Customers, Industries, Partners, Resources } from './list';
import Comp from './Comp';

function Footer() {
  const [active, setActive] = useState("")

  const onClk = val => setActive(pr => val === pr ? "" : val)

  return (
    <>
      <div className='py-6 px-4 md:px-12 bg-[#222531]'>
        <footer className="md:grid md:grid-cols-2 md:gap-6 max-w-7xl mx-auto">
          <div className='mb-4 md:hidden'>
            <img src="./img/logo/green.png" alt="logo" />
          </div>

          <div className='lg:grid lg:grid-cols-2 lg:gap-12'>
            <div className='hidden md:block mb-10 text-[#C4C4C4]'>
              <img src="./img/logo/logo.png" alt="" />
              <div className='my-2 md:text-sm xl:text-base font-medium'>
                6th Floor, Nizara Bonanza, Door No:813, <br />
                Anna Salai, Chennai, Tamil Nadu 600002
              </div>

              <div className='df'>
                <a href="https://twitter.com/coinskite?s=08" rel="noreferrer" target="_blank">
                  <img
                    className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                    src="./img/footer/twitter.png"
                    alt="twiter"
                  />
                </a>
                <a href="https://www.linkedin.com/in/coins-kite" rel="noreferrer" target="_blank">
                  <img
                    className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                    src="./img/footer/ln.png"
                    alt="linkedin"
                  />
                </a>
                <a href="https://m.facebook.com/coinskite.coinskite" rel="noreferrer" target="_blank">
                  <img
                    className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                    src="./img/footer/fb.png"
                    alt="facebook"
                  />
                </a>
                <a href="https://www.instagram.com/coinskite" rel="noreferrer" target="_blank">
                  <img
                    className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                    src="./img/footer/insta.png"
                    alt="instagram"
                  />
                </a>
                <a href="/" rel="noreferrer" target="_blank">
                  <img
                    className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                    src="./img/footer/Whatsapp.png"
                    alt="Whatsapp"
                  />
                </a>
                <a href="/" rel="noreferrer" target="_blank">
                  <img
                    className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                    src="./img/footer/medium.png"
                    alt="Medium"
                  />
                </a>
              </div>

              <div className='my-2 md:text-base'>
                @Copyright 2022 Coinskite <br />
                Inc.All Rights Reserved
              </div>
            </div>

            <div>
              <Comp
                active={active}
                onClk={onClk}
                list={Company}
                name="Company"
              />

              <Comp
                active={active}
                onClk={onClk}
                list={Services}
                name="Services"
              />

              <Comp
                active={active}
                onClk={onClk}
                list={Customers}
                name="Customers"
              />
            </div>
          </div>

          <div className='lg:grid lg:grid-cols-2 lg:gap-12'>
            <div>
              <Comp
                active={active}
                onClk={onClk}
                list={Industries}
                name="Industries"
              />
            </div>

            <div>
              <Comp
                active={active}
                onClk={onClk}
                list={Partners}
                name="Partners"
              />

              <Comp
                active={active}
                onClk={onClk}
                list={Resources}
                name="Resources"
              />
            </div>
          </div>
        </footer>
      </div>

      <div className='hidden lg:block lg:h-12 lg:border-t-2 border-primary-900 bg-[#222531]'></div>
    </>
  )
}

export default Footer