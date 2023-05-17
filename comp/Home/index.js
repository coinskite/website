import Platforms from './Platforms';
import Products from './Products';
import Benefits from './Benefits';
import Clients from './Clients';
import Header from './Header';
import Unique from './Unique';
import Final from './Final';
import Tools from './Tools';
import Blog from './Blog';

function Home() {
  return (
    <div className='text-white bg-[#111112]'>
      <Header />
      <Products />
      <Platforms />
      <Tools />
      <Benefits />
      <Unique />
      <Clients />
      <Blog />
      <Final />
    </div>
  )
}

export default Home