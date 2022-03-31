import Search from '../../svg/search.svg';

function Header() {
  return (
    <div className="theme-header theme-sec df pad-main-1-3 pr">
      <div className="dfc p-16 webinar-header-count">
        <h1 className="">
          Webinars
        </h1>
        <p>At Coinskite, you’ll be on the cutting edge of technological innovation, working with teammates across the globe to build a trusted foundation for the digital economy of tomorrow.</p>

        <div className="df webinar-header-search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  )
}

export default Header
