import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Arrow from '../../svg/arrows/download.svg';
import Application from '../Application';

function Details({ data }) {
  const router = useRouter()
  const { _id, application = false } = router.query

  const push = () => {
    if (!application) return router.push(`${_id}?application=true`)
  }

  if (application) return <Application jobId={_id} />

  return (
    <div className='pad-main-3 detail-job max-w'>
      <div className='df'>
        <Arrow className="detail-arr" onClick={() => router.push("/hire")} />
        <p>{data.category}</p>
      </div>

      <div className='p-16'>
        <h1>{data.title} ({data.location})</h1>
        <p className='detail-job-type'>{data.location} | {data.workType}</p>

        <h5>{data.title}</h5>
        {/* <p>{data.description}</p> */}

        <h5>What is Coinskite?</h5>
        <p>Coinskite is India's most trusted Bitcoin & cryptocurrency exchange built by a team of hardcore traders and passionate blockchain enthusiasts. The world is on the cusp of the crypto revolution and our team has been at the forefront of it in India. We're on a mission to make crypto accessible for all and build an exchange that is guided by values of innovation, transparency and trust.</p>
        <p>With a volume of $26 billion in 2021 so far, and growing at an exponential pace, WazirX is witnessing a steep rise in the number of new users as well as trading activity. With 8 million+ registered users, WazirX’s growth has just about started.</p>

        <h5>What is in it for you?</h5>
        <p>You will have the opportunity to work with a community of young, vibrant and enthusiastic minds who passionately own and love what they do. You will have complete freedom to chase down your goals without inhibitions and have a front seat view of the crypto revolution as we make our way to the pages of history.</p>

        {
          data.points.map(p => (
            <Fragment key={p._id}>
              <h5>{p.heading}</h5>
              <ul>
                {
                  p.list.map(li => (
                    <li key={li}>{li}</li>
                  ))
                }
              </ul>
            </Fragment>
          ))
        }

        <div className='df jcc'>
          <button onClick={push} className='theme-sec'>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Details