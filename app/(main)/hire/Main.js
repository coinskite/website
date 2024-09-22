"use client";

import { useMemo, useState } from 'react'
import Search from '@/svg/search.svg'
import Switch from './Switch'
import Card from './Card'

const WorkType = ["Full Time", "Part Time", "Internship"]

function Main({ data }) {
  const [department, setDepartment] = useState("")
  const [workType, setWorkType] = useState("")
  const [location, setLocation] = useState("")
  const [searchBy, setSearchBy] = useState("")

  const roles = useMemo(() => {
    const filtered = [...data]

    if (department) {
      filtered = filtered.filter(d => d.title === department)
    }

    if (workType) {
      filtered = filtered.map(p => ({
        title: p.title,
        roles: p.roles.filter(r => r.workType === workType)
      }))
    }

    if (location) {
      filtered = filtered.map(p => ({
        title: p.title,
        roles: p.roles.filter(r => r.location === location)
      }))
    }

    if (searchBy) {
      filtered = filtered.map(p => ({
        title: p.title,
        roles: p.roles.filter(r => r.title.toLowerCase().includes(searchBy))
      })).filter(p => p.roles.length)
    }

    return filtered
  }, [department, workType, location, searchBy])

  const clear = () => {
    setDepartment("")
    setWorkType("")
    setLocation("")
    setSearchBy("")
  }

  return (
    <div className='pad-main-3 bg-[#222531] text-[#C4C4C4]'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid gap-4 mb-8'>
          <h2 className='text-[10px] xs:text-xs sm:text-xl md:ext-[25px] lg:text-3xl xl:text-[35px] font-semibold text-primary-900'>Open Positions</h2>
          <select
            className='text-[10px] xl:text-base font-medium bg-[#152A39] border-primary-900 rounded-sm'
            value={department}
            onChange={e => setDepartment(e.target.value)}
          >
            <option value="" disabled>Choose Department</option>
            {
              data.map(p => (
                <option
                  key={p.title}
                  value={p.title}
                >
                  {p.title}
                </option>
              ))
            }
          </select>

          <select
            className='text-[10px] xl:text-base font-medium bg-[#152A39] border-primary-900 rounded-sm'
            value={workType}
            onChange={e => setWorkType(e.target.value)}
          >
            <option value="" disabled>Choose Work Type</option>
            {
              WorkType.map(type => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))
            }
          </select>

          {
            !(location === "Remote") &&
            <select
              className='text-[10px] xl:text-base font-medium bg-[#152A39] border-primary-900 rounded-sm'
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              <option value="" disabled>Choose Location</option>
              <option value="Remote">Remote</option>
            </select>
          }

          <div className='df'>
            <div className='text-xs lg:text-[15px] xl:text-lg font-medium text-primary-900'>Remote Only</div>
            <Switch
              active={location === "Remote"}
              onClick={() => setLocation(location === "Remote" ? "" : "Remote")}
            />
          </div>

          {
            (department || workType || location || searchBy) &&
            <button onClick={clear} className=''>Clear</button>
          }

          <div className='df pl-1 bg-[#152A39] border border-primary-900 rounded-sm'>
            <Search className="fill-white" />
            <input
              type="text"
              value={searchBy}
              className='pl-0 text-[10px] xl:text-base font-medium bg-inherit border-none text-[#C4C4C4]'
              onChange={e => setSearchBy(e.target.value)}
            />
          </div>
        </div>

        {
          roles.map(r => (
            <Card
              key={r.title}
              roles={r.roles}
              title={r.title}
            />
          ))
        }

        {
          roles.length === 0 &&
          <div className='dfc items-center h-80'>
            <h4 className='mt-auto text-[10px] xs:text-xs sm:text-xl md:ext-[25px] lg:text-3xl xl:text-[35px] font-semibold text-primary-900'>No Jobs found</h4>
            <p className='text-[10px] xl:text-base font-medium text-[##C4C4C4]'>Oops ,you have no jobs that match the filter conditions</p>
            <p className='mb-auto text-[10px] xl:text-base font-medium text-[##C4C4C4]'>Try, refining your search</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Main