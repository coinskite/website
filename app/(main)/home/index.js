// import Platforms from './Platforms';
import Products from './Products';
// import Benefits from './Benefits';
import Networks from './networks';
import Clients from './Clients';
import Counts from './counts';
import Header from './Header';
// import Unique from './Unique';
import Final from './Final';
import Tools from './Tools';
import Blog from './Blog';

import "keen-slider/keen-slider.min.css"
import OurServices from './our-services';
import UniqueMethodology from './unique-methodology';
import Mission from './mission';

function Home() {
  return (
    <div className='text-white bg-[#111112] px-10'>
      <Header />
      <Networks />
      <Mission />
      <OurServices />
      <Tools />
      <UniqueMethodology />
      <Counts />
      <Clients />
      <Blog />
      <Final />

      {/* <Products /> */}
      {/* <Products /> */}
      {/* <Platforms /> */}
      {/* <Benefits /> */}
      {/* <Unique /> */}
    </div>
  )
}

export default Home