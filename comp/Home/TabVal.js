function TabVal({ active, title, vals = [] }) {
  return (
    <div className={`dfc gap1 offer-right ${active === title ? "active" : ""}`}>
      <div className="df jcc">
        <img
          src={title === "StartUps" ? "./img/offer/startup.png" : "./img/offer/enterprises.png"}
          alt={title}
        />
        <h3 className="tab-heade-h3 caps">Blockchain For {title}</h3>
      </div>

      <div className="to-br dfc gap1 flex1">
        {
          vals.map(val => (
            <div key={val} className="df align-start">
              <img src="./img/offer/tick.png" alt="tick" className="tick" />
              <p className="tab-info-p flex1">{val}</p>
            </div>
          ))
        }
      </div>

      <p className="center">
        <button className="br5 theme-sec">Explore the possibilities</button>
      </p>
    </div>
  )
}

export default TabVal