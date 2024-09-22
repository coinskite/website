import Search from '@/svg/search.svg';

function Header() {
  return (
    <div className="theme-sec pad-main-1-3">
      <div className="df theme-header relative max-w-7xl mx-auto">
        <div className="dfc webinar-header-count">
          <h1 className="">
            Webinars
          </h1>
          <p>At Coinskite, you'll be on the cutting edge of technological innovation, working with teammates across the globe to build a trusted foundation for the digital economy of tomorrow.</p>

          <div className="df webinar-header-search">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
