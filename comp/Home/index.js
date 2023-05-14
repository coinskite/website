import Blog from './Blog';
import Header from './Header';
// import Products from './Products';
import Final from './Final';
import Tools from './Tools';
import Benefits from './Benefits';
import Unique from './Unique';
import Clients from './Clients';
import Platforms from './Platforms';

function Home() {
  return (
    <div className='text-white bg-[#222531]'>
      <Header />
      {/* <Products /> */}
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