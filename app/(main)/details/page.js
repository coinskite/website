"use client";

import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import Arrow from '../../svg/arrows/download.svg';
// import Application from '../Application';

function Details({ data }) {
  const router = useRouter()
  const { _id, application = false } = router.query

  const push = () => {
    if (!application) return router.push(`${_id}?application=true`)
  }

  // if (application) return <Application jobId={_id} />

  return (
    <div className='pad-main-3 bg-[#222531] text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='df mb-4 lg:mb-8'>
          <Arrow className="rotate-180 hire-details-arrow" onClick={() => router.push("/hire")} />
          {/* <p>{data?.category}</p> */}
        </div>

        <div>
          <h1 className='mb-1 text-[15px] xs:text-xl sm:text-[25px] md:text-3xl lg:text-[35px] xl:text-[40px] font-medium text-primary-900'>{data?.title} ({data?.location})</h1>
          <p className='mb-4 lg:mb-8 text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium text-[#C4C4C4]'>{data?.location} | {data?.workType}</p>

          <h5 className='mb-2 text-[13px] xs:text-base sm:text-xl md:text-2xl lg:text-[26px] xl:text-3xl font-medium'>What is Coinskite?</h5>
          <p className='mb-2 text-[8px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl'>Coinskite is India's most trusted Bitcoin & cryptocurrency exchange built by a team of hardcore traders and passionate blockchain enthusiasts. The world is on the cusp of the crypto revolution and our team has been at the forefront of it in India. We're on a mission to make crypto accessible for all and build an exchange that is guided by values of innovation, transparency and trust.</p>
          <p className='mb-4 lg:mb-8 text-[8px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl'>With a volume of $26 billion in 2021 so far, and growing at an exponential pace, WazirX is witnessing a steep rise in the number of new users as well as trading activity. With 8 million+ registered users, WazirX’s growth has just about started.</p>

          <h5 className='mb-2 text-[13px] xs:text-base sm:text-xl md:text-2xl lg:text-[26px] xl:text-3xl font-medium'>What is in it for you?</h5>
          <p className='mb-4 lg:mb-8 text-[8px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl'>You will have the opportunity to work with a community of young, vibrant and enthusiastic minds who passionately own and love what they do. You will have complete freedom to chase down your goals without inhibitions and have a front seat view of the crypto revolution as we make our way to the pages of history.</p>

          {
            data?.points?.map(p => (
              <Fragment key={p._id}>
                <h5 className='mb-2 text-[13px] xs:text-base sm:text-xl md:text-2xl lg:text-[26px] xl:text-3xl font-medium'>{p.heading}</h5>
                <ul className='mb-4 lg:mb-8'>
                  {
                    p.list.map(li => (
                      <li
                        key={li}
                        className='text-[8px] xs:text-[8px] sm:text-[10px] md:text-xs lg:text-base xl:text-xl'
                      >
                        {li}
                      </li>
                    ))
                  }
                </ul>
              </Fragment>
            ))
          }

          <div className='df jcc'>
            <button
              onClick={push}
              className='px-12 py-2 text-xs xs:text-xs sm:text-lg md:text-xl lg:text-2xl font-medium text-white bg-primary-900'
            >
              Apply for this job
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details