import { useEffect, useState } from 'react'

const list = [
  {
    key: 1,
    title: 'Community-centric',
    para: 'We aspire to build a community of blockchain enthusiasts from all walks of life for sustained growth.'
  },
  {
    key: 2,
    title: 'Simple but significant',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: 3,
    title: 'Action-oriented',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: 4,
    title: 'Accountable',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: 5,
    title: 'Passionate',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  }
]

function Values() {
  const [selected, setSelected] = useState(1)

  // useEffect(() => {
  //   let timeout = setInterval(() => {
  //     setSelected(prv => {
  //       if (prv === 5) return 1
  //       return prv + 1
  //     })
  //   }, 5000)

  //   return () => clearInterval(timeout)
  // }, [])

  return (
    <div className='pad-main-3 text-white bg-[#22C954]'>
      <h1 className='mb-1 md:mb-2 text-[15px] xs:text-xl sm:text-3xl lg:text-[40px] font-bold text-center'>Our values</h1>
      <div className='mb-4 sm:mb-6 lg:mb-8 text-[10px] xs:text-[13px] sm:text-[15px] md:text-xl lg:text-[23px] xl:text-[28px] font-medium text-center'>
        We abide by values that inspire work, <br />
        promote growth and drive change.
      </div>

      <div className='grid gap-4 grid-cols-3 max-w-7xl mx-auto'>
        <div className='border-l border-white relative text-[8px] xs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-[28px] font-medium'>
          {
            list.map(l => (
              <p
                key={l.key}
                onClick={() => setSelected(l.key)}
                className={`pl-2 sm:pl-4 lg:pl-5 py-1.5 sm:py-2 md:py-3 xl:py-4 leading-none border-l-2 cursor-pointer ${l.key === selected ? "border-white" : ' border-transparent'}`}
              >
                {l.title}
              </p>
            ))
          }
        </div>

        <div className='col-span-2 text-[6px] xs:text-[8px] sm:text-[13px] md:text-sm lg:text-lg xl:text-xl'>
          {
            list?.find(l => l.key === selected)?.para
          }
        </div>
      </div>
    </div>
  )
}

export default Values