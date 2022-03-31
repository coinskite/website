function Sect({ title, para }) {
  return (
    <div className='sol-main-grid'>
      <p className='theme-bg'></p>
      <h5>{title}</h5>
      <p>{para}</p>
    </div>
  )
}

function Main() {
  return (
    <div className='pad-main-3 solution-main'>
      <Sect
        title="Finance"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going"
      />
      <Sect
        title="Insurance"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going"
      />
      <Sect
        title="Real Estate"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />
      <Sect
        title="Law"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />

      <Sect
        title="Social media"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />
      <Sect
        title="Healthcare"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />
      <Sect
        title="Media"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />
      <Sect
        title="Sports"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />

      <div></div>
      <Sect
        title="Supplychain"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />
      <Sect
        title="Government"
        para="Altoros assists enterprises at each step of a development life cycle: from ideation to and going "
      />
      <div></div>
    </div>
  )
}

export default Main