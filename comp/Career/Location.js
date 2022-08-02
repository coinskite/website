import React from 'react'

function Location() {
  return (
    <div className='pad-main-3 caree-location center'>
      <h1 className='mb-16'>Hiring by Location</h1>
      <img width={790} src="./img/career/location.png" alt="location" />

      <div className='df center-loc'>
        <div className='flex1'>
          <p>Didn't find what you were looking for ?</p>
          <p>Think you can make an impact at coinskite with your skills ?</p>
        </div>

        <button>Send Resume</button>
      </div>
    </div>
  )
}

export default Location