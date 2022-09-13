import React, { useState } from 'react'

const list = [
  {
    key: '1',
    title: 'Community-centric',
    para: 'We aspire to build a community of blockchain enthusiasts from all walks of life for sustained growth.'
  },
  {
    key: '2',
    title: 'Simple but significant',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: '3',
    title: 'Action-oriented',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: '4',
    title: 'Accountable',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: '5',
    title: 'Passionate',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  }
]

function Values() {
  const [selected, setSelected] = useState('Our community is bigger than just us')

  return (
    <div className='pad-main-3 career-2-values'>
      <h1 className='center'>Our values</h1>
      <div className='center para mb-16'>We abide by values that inspire work, <br />
        promote growth and drive change.</div>

      <div className='career-val-tabs'>
        <div
          className='bord'
        >
          {
            list.map(l => (
              <p
                key={l.key}
                onClick={() => setSelected(l.title)}
                className={l.title === selected ? "selected" : ''}
              >
                {l.title}
              </p>
            ))
          }
        </div>

        <div className='ddtd'>
          {
            list?.find(l => l.title === selected)?.para
          }
        </div>
      </div>
    </div>
  )
}

export default Values