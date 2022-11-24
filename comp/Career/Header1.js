import { useRouter } from 'next/router';

function Header1() {
  const router = useRouter()

  return (
    <div className='dfc lg:gap-4 pad-main-3 text-[#223764] bg-primary-900 text-center'>
      <h1 className='lg:mb-2 text-xs xs:text-[15px] sm:text-[15px] md:text-lg lg:text-[25px] xl:text-3xl font-medium'>Career</h1>
      <h2 className="text-lg xs:text-[23px] sm:text-3xl md:text-[38px] lg:text-[53px] xl:text-[65px] font-bold">Build the Future of Blockchain</h2>
      <p className="text-[8px] xs:text-xs sm:text-[15px] md:text-lg lg:text-[25px] xl:text-[27px] font-medium">
        Want to be a part of building next-gen frameworks and products using <br />
        blockchain, DLT, and other peer-to-peer technologies <br />
        while collaborating with a global team.
      </p>

      <button
        className="mx-auto mt-2 lg:mt-4 px-4 py-1 lg:px-6 lg:py-1.5 xl:py-2 xl:px-8 text-[8px] xs:text-xs sm:text-[15px] md:text-lg lg:text-[25px] xl:text-[28px] font-semibold bg-white rounded-[3px]"
        onClick={() => router.push("/hire")}
      >
        View-Openings
      </button>
    </div>
  )
}

export default Header1