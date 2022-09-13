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

        <img src="./img/logo/icononly.png" className='mx-auto' alt="logo" />
        <p className='cs-p2 mb-16 mt-16'>
          "<strong>Our mission</strong> is to raise global economic <br />
          prosperity through the frictionless <br />
          exchange of financial value"
        </p>
        <p className='cs-p3'>-Ganeshan,CEO of Coinskite</p>
      </div>
      <h1 className='cs-header lg:text-[80px] md:text-[70px] sm:text-[40px] mb-35 mt-20'>Life at Coinskite</h1>

      <div className='df care-group mb-20'>
        <img
          width={451}
          src="./img/career/groupofpeople.png"
          alt="group"
        />
        <div>
          <p className='cs-head'>Builders at Coinskite </p>
          <p className='cs-para'>We are a group of passionate blockchain
            <br /> developers, strategists, and content creators <br />
            who deeply believe in the potential of<br />
            blockchain technology to transform startups<br /> and enterprises from ground zero.</p>
        </div>


      </div>


      <div className='df' style={{ justifyContent: 'space-between' }}>
        <div>
          <p className='cs-head'>#KITEHIGH</p>
          <p className='cs-para'>We facilitate business transformation by<br />
            offering 360-degree blockchain solutions like<br />
            smart contract development, decentralized<br />
            data management, single-layer reconciliation<br />
            , and more.</p>
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