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
    <div className='pad-main-3 text-center text-white bg-[#222531]'>
      <h1 className="sm:mt-4 text-[15px] xs:text-xl sm:text-[25px] md:text-3xl lg:text-[40px] font-semibold text-[#22C954]">Perks and Benefits</h1>
      <div className='mb-4 sm:mb-8 text-[8px] xs:text-[13px] sm:text-[15px] md:text-xl lg:text-[25px] xl:text-[28px] font-medium'>We work in a way that favours mutual growth and <br />respect for everyone involved.</div>

      <div className='grid grid-cols-2 gap-2 xs:gap-6 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto'>
        {
          list.map(l => (
            <div
              key={l.key}
              className='dfc items-center p-2 pb-6 sm:pb-8 md:pb-10 bg-[#0F161B] border border-[#22C954] rounded'
            >
              <img className="w-20 h-20 md:w-40 md:h-40" src={l.img} alt={l.head} />
              <p className='text-[8px] xs:text-xs sm:text-base md:text-xl lg:text-[25px] xl:text-[28px] font-semibold'>{l.head}</p>
              <p className='text-[6px] xs:text-[7.5px] sm:text-[10px] md:text-sm lg:text-lg xl:text-xl font-semibold'>{l.para}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Decentralised