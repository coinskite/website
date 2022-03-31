import React, { useState } from 'react';
import Search from '../../svg/search.svg';
import Arr from '../../svg/arrows/white.svg';

const tabs = ["All posts", "Sales", "Marketing", "Recruiting", "Guides"]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Blog({ type, heading, date, read }) {
  return (
    <div className='dfc'>
      <div className='theme-bg in-blog'></div>

      <div>
        <p className='in-blog-pink'>{type}</p>
        <h3 className='in-blg-h3'>{heading}</h3>
        <p className='in-blog-info'>{date} | {read}</p>
      </div>
    </div>
  )
}

function Main() {
  const [current, setCurrent] = useState(0)

  return (
    <div className='pad-main-1-3'>
      <div className='df mb-16 blog-tab'>
        {
          tabs.map((tab, i) => (
            <div
              key={tab}
              onClick={() => setCurrent(i)}
              className={`pr tab-title ${i === current ? "active" : ""}`}
            >
              <div>{tab}</div>
              <div className="tab-line"></div>
            </div>
          ))
        }
        <div className='br5' style={{ backgroundColor: '#D9D9D9', padding: "4px 4px 0" }}>
          <Search />
        </div>
      </div>

      <select className='mb-16 reselect-tab input-box'>
        {
          tabs.map(tab => (
            <option key={tab} value={tab}>{tab}</option>
          ))
        }
      </select>

      <div className='blog-main-lists'>
        {
          arr.map(data => (
            <Blog
              key={data}
              type="Sales"
              heading="How Sales Data Analysis Cuts Prospecting Times in Half"
              date="December 16, 2021"
              read="14 min read"
            />
          ))
        }
      </div>

      <div className='df jcc in-blog-num'>
        <Arr className="rotateZ180" />
        {
          arr
            .filter(data => data < 7)
            .map(data => (
              <p key={data} className={data === 1 ? "theme-sec" : ""}>{data}</p>
            ))
        }
        <p style={{ letterSpacing: "2px" }}>...</p>
        <p>12</p>
        <Arr />
      </div>
    </div>
  )
}

export default Main