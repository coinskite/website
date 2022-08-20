import React, { useMemo, useState } from 'react'
import Search from '../../svg/search.svg'
import Switch from '../ui/Switch'
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
      }))
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
    <>
      <div className='hirec-main-sec1 pad-main-3'>
        <div className='max-w'>
          <h2>Open Positions</h2>

          <div className='df mb-16'>
            <select
              className='input-box hire-selec1'
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
              className='input-box hire-selec1'
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
                className='input-box hire-selec2'
                value={location}
                onChange={e => setLocation(e.target.value)}
              >
                <option value="" disabled>Choose Location</option>
                <option value="Remote">Remote</option>
              </select>
            }

            <div className='w-remote'>Remote Only</div>
            <div>
              <Switch
                active={location === "Remote"}
                onClick={() => setLocation(location === "Remote" ? "" : "Remote")}
              />
            </div>

            {
              (department || workType || location || searchBy) &&
              <button onClick={clear} className='br5 p-8-16'>Clear</button>
            }
          </div>

          <div className='df hire-serach-box'>
            <Search />
            <input
              type="text"
              value={searchBy}
              className='input-box'
              onChange={e => setSearchBy(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='hirec-main-sec2 pad-main-3 max-w'>
        {
          roles.map(r => (
            <Card
              key={r.title}
              roles={r.roles}
              title={r.title}
            />
          ))
        }
      </div>
    </>
  )
}

export default Main