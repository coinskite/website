
const list = [
  {
    key: "1",
    title: "Innovative Solutions",
    para: "Impressed with Coinskite's innovative blockchain solutions. They have transformed our business operations",
    src: "/img/home_new/testimonials/1.png",
    name: "Jane Cooper",
    role: "CEO at ABC Corporation"

  },
  {
    key: "2",
    title: "Reliable and Trustworthy",
    para: "Trustworthy blockchain solutions provided. They have boosted our productivity and fostered transparency",
    src: "/img/home_new/testimonials/2.png",
    name: "martin luther",
    role: "CEO at ABC Corporation"

  },
  {
    key: "3",
    title: "Exceptional Service Provider",
    para: "Exceptional blockchain services offered. They have given us a competitive edge in the digital landscape",
    src: "/img/home_new/testimonials/3.png",
    name: "james william",
    role: "CEO at ABC Corporation"

  }
]
function Card({ src, title, para, name, role, }) {
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
      <p>
        {name}
      </p>
      <p>
        {role}
      </p>
    </div>
  )
}

function Clients() {
  return (
    <div>
      <div>
        <p>
          Our Clients Speak
        </p>
        <p>
          We have been working with clients around the world
        </p>
      </div>

      <div className='df'>
        {list.map(l => <Card {...l} />)}
      </div>
    </div>
  )
}

export default Clients