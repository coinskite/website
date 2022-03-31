import Header from './Header';
import Main from './Main';

function Hire({ data }) {
  return (
    <>
      <Header />
      <Main data={data} />
    </>
  )
}

export default Hire