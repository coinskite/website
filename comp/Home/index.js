// import Blog from './Blog';
import Header from './Header';
import Stacks from './Stacks';
// import Products from './Products';
// import Final from './Final';
import Tools from './Tools';
import Benefits from './Benefits';
import Unique from './Unique';
import Clients from './Clients';

function Home() {
  return (
    <div className='text-white bg-[#222531]'>
      <Header />
      {/* <Products /> */}
      <Stacks />
      {/* <Blog /> */}
      {/* <Final /> */}
      <Tools />
      <Benefits />
      <Unique />
      <Clients />
    </div>
  )
}

export default Home