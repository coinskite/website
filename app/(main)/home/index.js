import PoweringTools from './PoweringTools';
import Empowering from './empowering';
import Services from './Services';
import Customer from './Customer';
import Unlock from './Unlock';
import Choose from './choose';
import Banner from './Banner';
import Member from './Member';
import Final from './Final';
import Focus from './Focus';
import Blog from './Blog';

function Home() {
  return (
    <div className='text-white bg-black'>
      <Banner />
      <Services />

      <div className='bg-[#0D0D0F]'>
        <PoweringTools />
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