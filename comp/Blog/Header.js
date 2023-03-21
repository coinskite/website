function Header() {
  return (
    <div className='pad-main-3 grid lg:flex gap-4'>
      <div className="h-[200px] w-[200px] bg-primary-900">
        <img src="./img/blog/chatgpt.png" alt="" />
      </div>

      <div>
        <button className="text-white bg-primary-900">
          NEW
        </button>

        <p>
          Map2Earn to help merge physical and
          virtual worlds
        </p>

        <p>
          Map2Earn is a revolutionary Metaverse-oriented economic model that
          enables users to become mappers while earning tokens
        </p>

        <p className="df">
          <span>
            Rubesh,Researcher @coinskite
          </span>

          <span>
            Jan 21,2023
          </span>
        </p>
      </div>
    </div>
  )
}

export default Header