import axios from 'axios';
import mainUrl from '../../../constants/url';

import Header from './Header';
import Main from './Main';

async function Hire() {
  const { data: { filteredData } } = await axios.get(`${mainUrl}/job`)

  return (
    <>
      <Header />
      <Main data={filteredData} />
    </>
  )
}

export default Hire