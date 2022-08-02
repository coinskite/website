import React from 'react'

function SubHeader2() {
  return (
    <section className='pad-main-3 career-2-sb center'>
      <div>
        <h1>Why Coinskite ?</h1>
        <p className='cs-p1 mb-16 mt-16'>At Coinskite,we envision a global economy where people and business <br />
          everywhere can more freely connect and tranact with each other,  <br />
          through a system that has the reach and accessibility of the internet and <br />
          knows no border and boundaries.We believe that such a system can raise  <br />
          prosperity for people and companies anywhere.
        </p>

        <img src="./img/logo/icononly.png" alt="logo" />
        <p className='cs-p2 mb-16 mt-16'>
          "<strong>Our mission</strong> is to raise global economic <br />
          prosperity through the frictionless <br />
          exchange of financial value"
        </p>
        <p className='cs-p3'>-Ganeshan,CEO of Coinskite</p>
      </div>

      <div className='df care-group'>
        <img
          width={450}
          src="./img/career/groupofpeople.png"
          alt="group"
        />
        <div>
          <p className='cs-head'>Love what you Do</p>
          <p className='cs-para'>At Coinskite, everyone is passionate about <br /> transforming startups and enterprises by <br /> integrating blockchain solutions into everyday <br /> operations.</p>
        </div>
      </div>

      <div className='df' style={{ justifyContent: 'space-between' }}>
        <div>
          <p className='cs-head'>#insideDO</p>
          <p className='cs-para'>At Coinskite, everyone is passionate about <br /> transforming startups and <br /> enterprises by integrating blockchain <br /> solutions into everyday operations.</p>
        </div>
        <img
          width={450}
          src="./img/career/groupofpeople.png"
          alt="group"
        />
      </div>
    </section>
  )
}

export default SubHeader2