import Arrow from '../../svg/arrows/white.svg';

function Stacks() {
  return (
    <>
      <div className="pad-main-1-3 mb-6 grid md:grid-cols-2 font-semibold">
        <div className='mb-4'>
          <h1 className="gradient-text sm:text-xl md:text-[25px] lg:text-[35px]">OUR TECHSTACK</h1>

          <div className="my-3 text-[13px] sm:text-[28px] md:text-[30px] lg:text-[37px] xl:text-[45px]">
            We use state-of-the-art <br /> blockchain and DLT tools
          </div>

          <button className="df mb-2 text-[15px] md:text-[17px] lg:text-[30px]">
            Learn more <Arrow />
          </button>
        </div>

        <div className="mx-auto bg-white rounded-[10px]">
          <div className="p-2 text-[15px] sm:text-[23px] md:text-[15px] lg:text-[28px] text-center bg-primary-900 text-[#17171F] rounded-t-[10px]">
            Full-Stack Blockchain <br /> Development
          </div>

          <div className="px-4 py-8">
            <div className='df xs:gap-8 px-2 py-4'>
              <img className='h-6 lg:h-auto' src="./img/home/tools/solidty.png" alt="stack" />
              <img className='h-6 lg:h-auto' src="./img/home/tools/Gochain.png" alt="stack" />
              <img className='h-6 lg:h-auto' src="./img/home/tools/w3js.png" alt="stack" />
            </div>

            <div className='df xs:gap-8 justify-center px-2 py-6'>
              <img className='h-6 lg:h-auto' src="./img/home/tools/rust.png" alt="stack" />
              <img className='h-6 lg:h-auto' src="./img/home/tools/quorum.png" alt="stack" />
              <img className='h-4 lg:h-auto' src="./img/home/tools/corda.png" alt="stack" />
            </div>

            <div className='df xs:gap-8 justify-center px-2 py-4'>
              <img className='h-6 lg:h-auto' src="./img/home/tools/hedera.png" alt="stack" />
              <img className='h-6 lg:h-auto' src="./img/home/tools/Hyperledeger.png" alt="stack" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="mb-4 gradient-text text-[15px] sm:text-xl md:text-[23px] lg:text-[40px] xl:text-[45px] md:font-bold">
          LEVERAGING INDUSTRYs BEST PLATFORM
        </h1>
        <div className="grid grid-cols-5 items-center gap-4 pad-main-1-3 bg-primary-900">
          <img src="./img/home/platform/aws.png" alt="cloud stack" />
          <img src="./img/home/platform/oracle.png" alt="cloud stack" />
          <img src="./img/home/platform/azure.png" alt="cloud stack" />
          <img src="./img/home/platform/ibm.png" alt="cloud stack" />
          <img src="./img/home/platform/google.png" alt="cloud stack" />
        </div>
      </div>
    </>
  )
}

export default Stacks