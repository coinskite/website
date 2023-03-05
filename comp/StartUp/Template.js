import { Fragment } from "react"

function Template({ src, title1, desc1, list, desc2 }) {
  return (
    <div className="flex items-start gap-4 md:gap-8 lg:gap-12">
      <img
        className="w-32 xs:w-36 sm:w-44 md:w-56 lg:w-64 xl:w-80"
        src={src}
        alt="Service"
      />

      <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
        <h3 className="text-[10px] xs:text-[15px] sm:text-xl md:text-[25px] lg:text-3xl xl:text-[35px] font-bold text-[#22C954]">
          {title1}
        </h3>
        <p className="mb-2 sm:mb-4 md:mb-6 xl:mb-8 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
          {desc1}
        </p>

        {
          list.map(l => (
            <Fragment key={l.title}>
              <h5 className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-[#22C954] underline">
                {l.title}
              </h5>

              <ol className="mb-2 sm:mb-4 md:mb-6 xl:mb-8 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
                {l.list.map((l, i) => (
                  <li key={l}>
                    {i + 1}. {l}
                  </li>
                ))}
              </ol>
            </Fragment>
          ))
        }

        <p className="mb-2 sm:mb-4 md:mb-6 xl:mb-8 text-[6px] xs:text-[8px] sm:text-[10px] md:text-sm lg:text-base xl:text-xl">
          {desc2}
        </p>

        <button className="px-0 text-xs xs:text-base sm:text-lg md:text-xl lg:text-[25px] xl:text-3xl font-bold text-[#22C954]">
          Learn more {`>`}
        </button>
      </div>
    </div>
  )
}

export default Template