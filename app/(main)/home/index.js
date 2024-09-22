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

function Home() {
  return (
    <div className='text-white bg-[#111112] px-10'>
      <Header />
      <Networks />
      <Products />
      <Tools />
      <Products />
      <Counts />
      {/* <Platforms /> */}
      {/* <Benefits /> */}
      {/* <Unique /> */}
      <Clients />
      <Blog />
      <Final />
    </div>
  )
}

export default Home