import Blog from './Blog';
import Header from './Header';
import Stacks from './Stacks';
import Products from './Products';
import Final from './Final';

function Home() {
  return (
    <div className='text-white bg-[#222531]'>
      <Header />
      <Products />
      <Stacks />
      <Blog />
      <Final />
    </div>
  )
}

export default Home