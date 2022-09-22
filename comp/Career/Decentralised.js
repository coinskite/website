const list = [
  {
    key: "1",
    head: 'Promoting Diversity',
    img: './img/career/image0.png',
    para: 'Coinskite is an equal opportunity  employer. Everyone with relevant skills has an opportunity.'
  },
  {
    key: "2",
    head: 'Company Equity',
    img: './img/career/image1.png',
    para: 'We believe in collaboration and mutual growth. Hence, we offer a stake in our unborn success.'
  },
  {
    key: "3",
    head: 'Flexible Timimg',
    img: './img/career/image2.png',
    para: 'We believe in collaboration and mutual growth. Hence, we offer a stake in our unborn success.'
  },
  {
    key: "4",
    head: 'Competitive salary',
    img: './img/career/image3.png',
    para: 'A healthy salary structure that is competitive with other blockchain-based service providers.'
  },
  {
    key: "5",
    head: 'Training and Mentorship',
    img: './img/career/image4.png',
    para: 'The Coinskite team is collaborative. We help each other stay on top of the newest developments.'
  },
  {
    key: "6",
    head: 'Unlimited Vacation',
    img: './img/career/image5.png',
    para: 'Work-life balance is crucial. So, you are free to take a vacation on  any day throughout the year.'
  },
]

function Decentralised() {
  return (
    <div className='pad-main-3 career-2-decent center'>
      <h1> Perks and Benefits</h1>
      <div className='cs-des'>We work in a way that favours mutual growth and <br />respect for everyone involved.</div>

      <div className='cs-grid'>
        {
          list.map(l => (
            <div className='cs-grid-box' key={l.key}>
              <div className='cs-img'>
                <img src={l.img} alt={l.head} />
              </div>
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