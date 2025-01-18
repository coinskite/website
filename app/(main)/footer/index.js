import { Company, Services, Industries, Partners, Resources, Product } from './list';
import Comp from './Comp';

function Footer() {
  return (
    <>
      <div className='py-6 px-4 md:px-12 bg-[#111112]'>
        <footer className="md:flex md:gap-6 max-w-7xl mx-auto">
          <div className='mb-10 space-y-4 text-[#C4C4C4]'>
            <img src="/img/logo/logo.png" alt="" className='mx-auto md:mx-0' />
            <div className='my-2 text-xs md:text-sm xl:text-base font-medium text-center md:text-left'>
              6th Floor, Nizara Bonanza, Door No:813, <br />
              Anna Salai, Chennai, Tamil Nadu 600002
            </div>

            <div className='df justify-center md:justify-start'>
              <a href="https://twitter.com/coinskite?s=08" rel="noreferrer" target="_blank">
                <img
                  className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                  src="/img/footer/twitter.png"
                  alt="twiter"
                />
              </a>
              <a href="https://www.linkedin.com/in/coins-kite" rel="noreferrer" target="_blank">
                <img
                  className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                  src="/img/footer/ln.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://m.facebook.com/coinskite.coinskite" rel="noreferrer" target="_blank">
                <img
                  className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                  src="/img/footer/fb.png"
                  alt="facebook"
                />
              </a>
              <a href="https://www.instagram.com/coinskite" rel="noreferrer" target="_blank">
                <img
                  className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                  src="/img/footer/insta.png"
                  alt="instagram"
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                  src="/img/footer/Whatsapp.png"
                  alt="Whatsapp"
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  className='md:w-6 md:h-6 lg:w-8 lg:h-8'
                  src="/img/footer/medium.png"
                  alt="Medium"
                />
              </a>
            </div>

            <div className='hidden md:block my-2 md:text-base'>
              @Copyright 2022 Coinskite <br />
              Inc.All Rights Reserved
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-0 max-w-sm mx-auto md:mr-0'>
            <Comp
              list={Company}
              name="Company"
            />

            <div>
              <Comp
                list={Services}
                name="Services"
              />

              <Comp
                list={Product}
                name="Product"
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-6 max-w-sm mx-auto'>
            <div>
              <Comp
                list={Industries}
                name="Industries"
              />
            </div>

            <div>
              <Comp
                list={Partners}
                name="Partners"
              />

              <Comp
                list={Resources}
                name="Resources"
              />
            </div>
          </div>
        </footer>
      </div>

      <div className='hidden lg:block lg:h-12 lg:border-t-2 border-primary-900 bg-[#111112]'></div>
    </>
  )
}

export default Footer