
function Header() {
  return (
    <div className="pad-main-3 text-[#223764] bg-primary-900">
      <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto">
        <div>
          <h1 className="mb-1 md:mt-4 text-3xl sm:text-[35px] md:text-[45px] lg:text-[65px] xl:text-[84px] font-bold leading-[1.2]">
            Covering <br />
            Coinskite ?
          </h1>

          <p className="max-w-[200px] sm:max-w-[250px] md:max-w-none text-[8px] sm:text-[10px] md:text-[13px] lg:text-lg xl:text-[22px] font-medium">
            If you want to get in touch for a story or an
            event,please reach out.Coinskite gladly
            contributes to the public conversation,and we
            aim to answer your questions as well as we can.
          </p>
        </div>

        <div>
          <img className="mx-auto" src="/img/press/HEADER.png" alt="pinned" />
        </div>
      </div>
    </div>
  )
}

export default Header