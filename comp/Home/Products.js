import { startupPoints, enterprisePoints } from './constants';
import Arrow from '../../svg/arrows/white.svg';
import Tick from '../../svg/tick.svg';

function TabVal({ title, vals = [] }) {
  return (
    <div className='dfc p-8 bg-[#363B41] rounded-[5px]'>
      <img
        src={title === "Startup" ? "./img/home/sec1/Startup.png" : "./img/home/sec1/Enterprise.png"}
        alt={title}
        className="w-14 xl:w-16 ml-auto"
      />
      <h3 className="text-[25px] text-primary-900 lg:text-[35px]">{title}</h3>

      <div className="dfc pr-5">
        {
          vals.map(val => (
            <div key={val} className="df gap-4">
              {/* <Tick className='w-5 h-5' /> */}
              <p className="text-[19px] lg:text-[22px] font-normal">{val}</p>
            </div>
          ))
        }
      </div>

      <button className="w-full h-[18px] mt-2 lg:h-12 text-[7px] lg:text-xl font-semibold text-[#fff] bg-primary-900 df justify-center rounded-[3px]">
        Learn more <Arrow />
      </button>
    </div>
  )
}

function Products() {
  return (
    <div className="pad-main-1-3 font-semibold">
      <h1 className="text-primary-900 sm:text-xl md:text-[38px] lg:text-[48px]">WE BRING INCREDIBLE IDEAS TO REALITY</h1>
      <div className=" mt-[9px] text-[13px] sm:text-[20px] md:text-[23px] lg:text-[35px] xl:text-[30px]">
        Holistic Support During the Entire <br /> Product Development Lifecycle
      </div>

      <div className="grid justify-center md:grid-cols-2 md:justify-items-center gap-4 my-6 mx-auto max-w-4xl">
        <TabVal
          title="Startup"
          vals={startupPoints}
        />

        <TabVal
          title="Enterprises"
          vals={enterprisePoints}
        />
      </div>
    </div>
  )
}

export default Products