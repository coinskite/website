
function Page() {
  return (
    <div>
      Page
    </div>
  )
}

export default Page



// import React from 'react'
// import axios from 'axios'
// import Details from '../../comp/Details'
// import mainUrl from '../../constants/url'

// export async function getStaticPaths() {
//   const { data: { ids } } = await axios.get(`${mainUrl}/job/ids`)
//   const paths = ids.map(id => ({
//     params: { _id: id._id }
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps(context) {
//   const id = context.params._id
//   const { data: { job } } = await axios.get(`${mainUrl}/job/${id}`)

//   return {
//     props: { data: job }
//   }
// }

// function index({ data }) {
//   return <Details data={data} />
// }

// export default index
