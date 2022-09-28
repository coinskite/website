function SubHeader2() {
  return (
    <section className='pad-main-3 text-center text-white bg-[#222531]'>
      <div className="text-[11px] sm:text-[15px] md:text-lg lg:text-[25px] xl:text-3xl font-medium">
        <h1 className="mb-2 lg:mb-4 text-[25px] sm:text-[40x] md:text-[50px] lg:text-[70px] xl:text-[80px] font-semibold">Why Coinskite ?</h1>
        <p className="xl:leading-8">At Coinskite,we envision a global economy where people and business <br />
          everywhere can more freely connect and tranact with each other,  <br />
          through a system that has the reach and accessibility of the internet and <br />
          knows no border and boundaries.We believe that such a system can raise  <br />
          prosperity for people and companies anywhere.
        </p>

        <img
          src="./img/logo/icononly.png"
          className='w-12 md:w-14 lg:w-16 xl:w-20 mx-auto my-4 lg:my-8'
          alt="logo"
        />

        <p className="xl:leading-8">
          "<strong className=" text-[#22C954]">Our mission</strong> is to raise global economic <br />
          prosperity through the frictionless <br />
          exchange of financial value"
        </p>
        <p className="mt-2 lg:mt-4">-Ganeshan,CEO of Coinskite</p>
      </div>

      <h1 className='mt-12 mb-4 lg:mb-6 text-3xl sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px] font-semibold lg:font-bold text-[#22C954]'>
        Life at Coinskite
      </h1>

      <div className='flex gap-2 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 md:mb-12 lg:mb-16 xl:mb-20 text-left'>
        <img
          className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[320px] xl:w-[470px]"
          src="./img/career/groupofpeople.png"
          alt="group"
        />
        <div>
          <p className='mb-3 leading-none text-lg sm:text-[25px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-bold'>Builders at Coinskite </p>
          <p className='text-[11px] sm:text-[15px] md:text-lg lg:text-3xl xl:leading-8 font-medium'>
            We are a group of passionate blockchain <br />
            developers, strategists, and content creators <br />
            who deeply believe in the potential of <br />
            blockchain technology to transform startups <br />
            and enterprises from ground zero.
          </p>
        </div>
      </div>

      <div className='flex gap-2 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-between text-left'>
        <div>
          <p className='mb-3 leading-none text-lg sm:text-[25px] md:text-[35px] lg:text-[45px] xl:text-[50px] font-bold'>#KITEHIGH</p>
          <p className='text-[11px] sm:text-[15px] md:text-lg lg:text-3xl xl:leading-8 font-medium'>
            We facilitate business transformation by <br />
            offering 360-degree blockchain solutions like <br />
            smart contract development, decentralized <br />
            data management, single-layer reconciliation, <br />
            and more.
          </p>
        </div>
        <img
          className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[320px] xl:w-[470px]"
          src="./img/career/groupofpeople.png"
          alt="group"
        />
      </div>
    </section>
  )
}

export default SubHeader2