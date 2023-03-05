
function Header() {
  return (
    <div className="pad-main-1-3 relative">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1>
            Join forces with Coinskite <br />
            and propel your business forward
          </h1>

          <p className="my-4">
            Looking to grow and succeed in today's competitive marketplace? Join <br />
            forces with Coinskite. Our team of experts and innovative solutions can <br />
            help you propel your business forward and reach new heights. Together, <br />
            we can make a powerful impact and achieve your goals
          </p>

          <button className="bg-primary-900">
            Partner with us
          </button>
        </div>

        <img
          className="absolute top-1/2 -translate-y-1/2 right-0 w-32"
          src="./img/partner/header.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Header