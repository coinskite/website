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
import Services from './services';
import Choose from './choose';
import Empowering from './empowering';

function Home() {
  return (
    <div className='text-white bg-[#111112]'>
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

      <Services />
      <Choose />
      <Empowering />
    </div>
  )
}

export default Home