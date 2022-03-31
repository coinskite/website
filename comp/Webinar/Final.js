let list = [1, 2, 3, 4, 5, 6, 7, 8]

function Final() {
  return (
    <div className="pad-main-1-3 webinar-final">
      {
        list.map(l => (
          <div key={l}>
            <div className="theme-sec webinar-final-div"></div>

            <div className="mt-8">
              Coinskite Office Hours: Multi-Channel Sales Tax Reporting
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Final