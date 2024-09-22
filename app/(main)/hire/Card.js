"use client";

import { useRouter } from 'next/navigation'
import Arrow from '../../svg/arrows/white.svg';

function Card({ title, roles = [] }) {
  const router = useRouter()

  const push = id => router.push(`/hire/${id}`)

  return (
    <>
      <div className={`${!roles.length ? "hidden" : "df"} justify-between mb-2`}>
        <p className='text-[6px] xs:text-xs sm:text-lg md:text-xl lg:text-[25px] xl:text-3xl font-semibold text-primary-900'>{title}</p>
        <button className='text-[6px] xs:text-[8px] xl:text-base font-medium bg-[#152A39] border border-primary-900 rounded-sm'>
          {roles.length} Open Roles
        </button>
      </div>

      <div className={`${!roles.length ? "hidden" : ""} mb-4`}>
        {
          roles.map(role => (
            <div
              key={role._id}
              className="p-2 lg:p-4 bg-[#152A39] border border-primary-900 rounded-sm cursor-pointer relative"
              onClick={() => push(role._id)}
            >
              <p className='mb-1 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-semibold'>{role.title}</p>
              <p className='df lg:mb-2 justify-between text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] lg:text-sm xl:text-lg font-medium'>
                {role.location} {role.workType}
              </p>
              <Arrow className="absolute top-1/2 right-1 lg:right-4 -translate-y-1/2" />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Card