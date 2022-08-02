import React, { useState } from 'react'

const list = [
  {
    key: '1',
    title: 'Our community is bigger than just us',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: '2',
    title: 'Simplicity in all we DO',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: '3',
    title: 'We speak up when we have something to say and listen when other DO',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: '4',
    title: 'We are accountable to deliver on our commitements',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  },
  {
    key: '5',
    title: 'Love is at our core',
    para: 'Every Blockchain experts shares the same vision of inclucating trust among clients and delivering results that far exceed their expectations than just us'
  }
]

function Values() {
  const [selected, setSelected] = useState('Our community is bigger than just us')

  return (
    <div className='pad-main-3 career-2-values'>
      <h1 className='center'>Our values</h1>
      <div className='center para mb-16'>Coinskite is a value-driven organization. Here is what we believe in</div>

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