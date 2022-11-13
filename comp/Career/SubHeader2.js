function SubHeader2() {
  return (
    <section className='pad-main-3 text-center text-white bg-[#222531]'>
      <div className="font-medium">
        <h1 className="mb-2 lg:mb-4 text-[15px] xs:text-xl sm:text-[25px] md:text-3xl lg:text-[35px] xl:text-[40px] font-semibold">Why Coinskite ?</h1>
        <p className="text-[6px] xs:text-[9px] sm:text-[13px] md:text-lg xl:text-xl xl:leading-8">At Coinskite,we envision a global economy where people and business <br />
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

        <p className="text-[10px] xs:text-[13px] sm:text-[15px] md:text-xl lg:text-[25px] xl:text-[28px] xl:leading-8">
          "<strong className=" text-[#22C954]">Our mission</strong> is to raise global economic <br />
          prosperity through the frictionless <br />
          exchange of financial value"
        </p>
        <p className="mt-2 lg:mt-4 text-[8px] xs:text-[9px] sm:text-[13px] md:text-[15px] lg:text-lg xl:text-xl">-Ganeshan,CEO of Coinskite</p>
      </div>

      <h1 className='mt-12 mb-4 lg:mb-6 text-[15px] sm:text-[25px] md:text-3xl lg:text-[40px] xl:text-[40px] font-semibold lg:font-bold text-[#22C954]'>
        Life at Coinskite
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className='df gap-2 xs:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 md:mb-12 lg:mb-16 xl:mb-20 text-left'>
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[320px] xl:w-[470px]"
            src="./img/career/r1.jpeg"
            alt="group"
          />
          <div>
            <p className='mb-3 leading-none text-[10px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-[35px] font-bold'>Builders at Coinskite </p>
            <p className='text-[6px] xs:text-[9px] sm:text-[13px] md:text-[15px] lg:text-lg xl:text-xl xl:leading-8 font-medium'>
              We are a group of passionate blockchain developers, strategists, and content creators who deeply believe in the potential of blockchain technology to transform startups and enterprises from ground zero.
            </p>
          </div>
        </div>

        <div className='df gap-2 xs:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-between text-left'>
          <div>
            <p className='mb-3 leading-none text-[10px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-[35px] font-bold'>#KITEHIGH</p>
            <p className='text-[6px] xs:text-[9px] sm:text-[13px] md:text-[15px] lg:text-lg xl:text-xl xl:leading-8 font-medium'>
              We facilitate business transformation by offering 360-degree blockchain solutions like smart contract development, decentralized data management, single-layer reconciliation, and more.
            </p>
          </div>
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[320px] xl:w-[470px]"
            src="./img/career/r2.jpeg"
            alt="group"
          />
        </div>
      </div>
    </section>
  )
}

export default SubHeader2