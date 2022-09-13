import React from 'react'

function Location() {
  return (
    <div className='pad-main-3 caree-location center'>
      <h1 className='mb-16'>Hiring by Location</h1>
      <img style={{ width: '100 %' }} className="m-auto" src="./img/career/map.png" alt="location" />

      <div className='df center-loc'>
        <div className='flex1'>
          <p>Didn't find what you were looking for ?</p>
          <p>If you think you can contribute but your role is not mentioned, please reach out to us.
          </p>
        </div>

        <button>Send Resume</button>
      </div>
    </div>
  )
}

export default Location