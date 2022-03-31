function Sub({ num, title, p }) {
  return (
    <div className='about-final-cent'>
      <p className='theme-clr'>0{num}</p>
      <h5>{title}</h5>
      <p>{p}</p>
    </div>
  )
}

function Final() {
  return (
    <div className='about-final pad-main-3'>
      <h1>Why Coinskite</h1>
      <div className='about-final-cb mb-16'>Coinskite Blockchain development company offers enterprise IT solutions & services to improve business processes and leverage technology innovation. Right from consulting, strategy, roadmap to continuous improvement of large transformational projects across diverse industries, Coinskite provides a strategic advantage for all companies who worked and will work with us.</div>

      <div className='max-w'>
        <Sub
          num={1}
          title="QUALITY AND EFFICIENCY"
          p="We work with numerous enterprise technologies to provide highly efficient, customized, scalable and integrated solutions to digitally transform your business."
        />
        <Sub
          num={2}
          title="CLIENT REALTIONSHIP"
          p="To build successful software and web applications you need a development team who understands your business needs. Our Platinum experts will offer you an amazing experience that will take you and your company to the next level."
        />
        <Sub
          num={3}
          title="INNOVATIONS"
          p="We define innovations and bring them to our clients and users. We know what it takes to be successful in Blockchain technologies, exchanges, mobile banking, VR and many more."
        />
      </div>
    </div>
  )
}

export default Final