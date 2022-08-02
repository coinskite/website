import React from 'react'

const list = [
  {
    key: "1",
    head: 'Promoting Diversity',
    img: './img/career/image0.png',
    para: 'Seek out new experiences, question the obvious, andstart your journey to mastery.'
  },
  {
    key: "2",
    head: 'Company Equity',
    img: './img/career/image1.png',
    para: 'Seek out new experiences, question the obvious, andstart your journey to mastery.'
  },
  {
    key: "3",
    head: 'Flexible Timimg',
    img: './img/career/image2.png',
    para: 'Seek out new experiences, question the obvious, andstart your journey to mastery.'
  },
  {
    key: "4",
    head: 'Competitive salary',
    img: './img/career/image3.png',
    para: 'Seek out new experiences, question the obvious, andstart your journey to mastery.'
  },
  {
    key: "5",
    head: 'Training and Mentorship',
    img: './img/career/image4.png',
    para: 'Seek out new experiences, question the obvious, andstart your journey to mastery.'
  },
  {
    key: "6",
    head: 'Unlimited Vacation',
    img: './img/career/image5.png',
    para: 'Seek out new experiences, question the obvious, andstart your journey to mastery.'
  },
]

function Decentralised() {
  return (
    <div className='pad-main-3 career-2-decent center'>
      <h1>Decentralized work</h1>
      <div className='cs-des'>These are the values we reply on to <br /> create a new way to work</div>

      <div className='cs-grid'>
        {
          list.map(l => (
            <div className='cs-grid-box' key={l.key}>
              <img src={l.img} alt={l.head} />
              <p className='head'>{l.head}</p>
              <p className='para'>{l.para}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Decentralised