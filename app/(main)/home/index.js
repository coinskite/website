import UniqueMethodology from './unique-methodology';
import OurServices from './our-services';
import Networks from './networks';
import Mission from './mission';
import Clients from './Clients';
import Counts from './counts';
import Header from './Header';
import Final from './Final';
import Tools from './Tools';
import Blog from './Blog';

import "keen-slider/keen-slider.min.css"
import Banner from './Banner';
import Services from './Services';
import PoweringTools from './PoweringTools';
import Unlock from './Unlock';
import Choose from './choose';
import Empowering from './empowering';
import Member from './Member';
import Customer from './Customer';
import Focus from './Focus';

function Home() {
  return (
    <div className='text-white bg-black'>
      {/* <Header /> */}
      <Banner />
      <Services />
      <div className='bg-[#0D0D0F]'>
        <PoweringTools />
        {/* <Networks /> */}
        {/* <Mission /> */}
        {/* <OurServices /> */}
        {/* <Tools /> */}
        {/* <UniqueMethodology /> */}
        {/* <Counts /> */}
        {/* <Clients /> */}
        <Unlock />
        <Focus />
        <Choose />
        <Empowering />
        <Customer />
        <Member />
        <Blog />
      </div>
      <Final />
    </div>
  )
}

export default Home