function Stacks() {
  return (
    <>
      <div className='pad-main-1-3 mb-6'>
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto">
          <div className='mb-4 '>
            <h1 className="text-[11px] xs:text-lg sm:text-lg md:text-[22px] lg:text-3xl xl:text-[40px] text-primary-900">
              Our Technology Arsenal
            </h1>

            <div className="text-[10px] xs:text-sm sm:text-base md:text-xl lg:text-xl xl:text-[25px] my-3">
              Empower your business with the latest <br />
              and greatest technologies from our extensive  <br />
              toolkit.From blockchain to artificial intelligence,  <br />
              our technology arsenal has it all
            </div>
          </div>

          <div className="mx-auto bg-white rounded-[10px]">
            <div className="text-xs xs:text-base sm:text-xl md:text-[25px] lg:text-[25px] xl:text-[28px] p-2 text-center bg-primary-900 text-[#17171F] rounded-t-[10px]">
              Full-stack Development
            </div>

            <div className="px-4 py-8">
              <div className='df xs:gap-16 px-2 py-4'>
                <img className='h-6 lg:h-auto' src="./img/home/tools/solidty.png" alt="stack" />
                <img className='h-6 lg:h-auto' src="./img/home/tools/Gochain.png" alt="stack" />
                <img className='h-6 lg:h-auto' src="./img/home/tools/w3js.png" alt="stack" />
              </div>

              <div className='df xs:gap-16 justify-center px-2 py-6'>
                <img className='h-6 lg:h-auto' src="./img/home/tools/rust.png" alt="stack" />
                <img className='h-6 lg:h-auto' src="./img/home/tools/quorum.png" alt="stack" />
                <img className='h-4 lg:h-auto' src="./img/home/tools/corda.png" alt="stack" />
              </div>

              <div className='df xs:gap-16 justify-center px-2 py-4'>
                <img className='h-6 lg:h-auto' src="./img/home/tools/hedera.png" alt="stack" />
                <img className='h-6 lg:h-auto' src="./img/home/tools/Hyperledeger.png" alt="stack" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-[11px] xs:text-sm sm:text-lg md:text-[22px] lg:text-3xl xl:text-[40px] mb-4 text-primary-900">
          Experience the power of Industry-Best Platforms
        </h1>

        <div className='pad-main-1-3 bg-primary-900'>
          <div className="grid grid-cols-5 items-center gap-4 h-[100px] md:h-[150px] max-w-7xl mx-auto">
            <img src="./img/home/platform/aws.png" alt="cloud stack" />
            <img src="./img/home/platform/oracle.png" alt="cloud stack" />
            <img src="./img/home/platform/azure.png" alt="cloud stack" />
            <img src="./img/home/platform/ibm.png" alt="cloud stack" />
            <img src="./img/home/platform/google.png" alt="cloud stack" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Stacks