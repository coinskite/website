import { useState } from 'react';
import { startupPoints, enterprisePoints } from './constants';
import Arrow from '../../svg/arrows/white.svg';

function TabVal({ active, title, vals = [] }) {
  return (
    <div className={`dfc gap1 offer-right ${active === title ? "active" : ""}`}>
      <div className="df">
        <img
          src={title === "Startup" ? "./img/home/sec1/startup.png" : "./img/home/sec1/enterprises.png"}
          alt={title}
          className="offer-right-img"
        />
        <h3 className="tab-heade-h3 flex1">Blockchain For {title}</h3>
        <Arrow className="arrow-in-tabval" />
      </div>

      <div className="to-br dfc gap1 flex1">
        {
          vals.map(val => (
            <div key={val} className="df align-start">
              <p className="tab-info-p flex1">{val}</p>
            </div>
          ))
        }
      </div>

      <p className="center">
        <button className="theme-sec">Explore the possibilities</button>
      </p>
    </div>
  )
}

function Products() {
  const [active, setActive] = useState("Startup")

  const clk = val => setActive(val)

  return (
    <div className="pad-main-1-3">
      <h1 className="offer-h1 center">We turn great ideas into successful products</h1>
      <div className="offer-p center">we support our partners during the whole development lifecycle</div>

      <div className="max-w home-offer">
        <TabVal
          title="Startup"
          active={active}
          vals={startupPoints}
        />

        <TabVal
          title="Enterprises"
          active={active}
          vals={enterprisePoints}
        />
      </div>

      <div className="df jcc tab-ind gap1">
        <div
          className={`tab-indicator cp ${active === "Startup" ? "active" : ""}`}
          onClick={() => clk("Startup")}
        ></div>
        <div
          className={`tab-indicator cp ${active === "Enterprises" ? "active" : ""}`}
          onClick={() => clk("Enterprises")}
        ></div>
      </div>
    </div>
  )
}

export default Products