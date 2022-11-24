import React from 'react'
import axios from 'axios'
import Hire from '../../comp/Hire'
import mainUrl from '../../constants/url'

export async function getStaticProps() {
  const { data: { filteredData } } = await axios.get(`${mainUrl}/job`)

  return {
    props: {
      data: filteredData
    }
  }
}

function hire({ data }) {
  return <Hire data={data} />
}

export default hire