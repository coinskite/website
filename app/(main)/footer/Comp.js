import Link from 'next/link';

function Comp({ name, list }) {
  return (
    <div className='mb-4 pb-1.5'>
      <ul>
        <li>
          <strong className='df mb-2 text-xs md:text-base font-semibold text-white cursor-pointer'>
            {name}
          </strong>
        </li>

        {
          list.map(li => (
            <li
              key={li.title}
              className="mb-1"
            >
              <Link href={li.link} className='text-[8px] md:text-xs lg:text-base font-medium text-[#C4C4C4] hover:text-white'>
                {li.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Comp