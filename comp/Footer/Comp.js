import Link from 'next/link';
import Arrow from '../../svg/arrows/white.svg';

function Comp({ active, name, list, onClk }) {
  return (
    <div className='mb-4 pb-1.5 border-b border-white md:border-none'>
      <ul className={active === name ? "active" : ""}>
        <li onClick={() => onClk(name)}>
          <strong className='df mb-2 text-[10px] xs:text-sm md:text-base md:font-semibold text-[#F5F5F5] cursor-pointer'>
            {name}
            <Arrow className="head-arr ml-auto md:hidden" />
          </strong>
        </li>
        {
          list.map(li => (
            <li
              key={li.title}
              className="need mb-1"
            >
              <Link href={li.link}>
                <a className='text-[10px] xs:text-sm md:text-xs lg:text-base lg:font-medium text-[#C4C4C4] hover:text-white'>
                  {li.title}
                </a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Comp