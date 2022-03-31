import { Fragment } from 'react'
let list = [1, 2, 3, 4]

function Final() {
  return (
    <>
      <div className="pad-main-1-3 webinar-final">
        {
          list.map(l => (
            <Fragment key={l}>
              <div>
                <div className="theme-sec webinar-final-div"></div>
                <div className="mt-8">
                  SaaS Checklist
                </div>
              </div>

              <div>
                <div className="theme-sec webinar-final-div"></div>
                <div className="mt-8">
                  Nexus Guide
                </div>
              </div>
            </Fragment>
          ))
        }
      </div>

      <div className='df jcc pad-main-1-3'>
        <button className='ulta-btn br5'>Load More Posts</button>
      </div>
    </>
  )
}

export default Final