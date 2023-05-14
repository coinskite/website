
const list = [
  {
    key: "1",
    src: "/img/home_new/methodology/1.png",
    title: "Ideate",
    para: " Turn your idea from concept to MVP"
  },
  {
    key: "2",
    src: "/img/home_new/methodology/2.png",
    title: "Design",
    para: " Sketch out the product to align the user needs"
  },
  {
    key: "3",
    src: "/img/home_new/methodology/3.png",
    title: "Develop",
    para: " Convert the designs into a live application"
  },
  {
    key: "4",
    src: "/img/home_new/methodology/4.png",
    title: "Deploy",
    para: "Launching the application to the market "
  },

]

function Card({ src, title, para }) {
  return (
    <div className='df'>
      <img
        className=''
        src={src}
        alt=''
      />
      <p>
        {title}
      </p>
      <p>
        {para}
      </p>
    </div>
  )
}

function Unique() {
  return (
    <div>
      <div>
        <p>
          Our Unique Methodology
        </p>
        <p>
          Learn about our step-by-step process for delivering results
        </p>
      </div>

      <div className='df '>
        {list.map(l => < Card {...l} />)}
      </div>
    </div>
  )
}

export default Unique