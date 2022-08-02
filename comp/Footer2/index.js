import { useState } from 'react';
import Link from 'next/link';
import Arrow from '../../svg/arrows/white.svg';

function Footer() {
  const [active, setActive] = useState("")

  const onClk = val => {
    if (val === active) {
      setActive("")
    } else {
      setActive(val)
    }
  }

  return (
    <>
      <footer className="black-bg">
        <div>
          <img src="./img/logo/white.png" alt="logo" />
          <p className='mt-8 mb-8'>Delivering blockchain solutions solutions to drive business outcomes for startups and enterprises</p>
          <button>Join Newsletter</button>
        </div>

        <div className="row-footer">
          <div className="dfc">
            <div>
              <ul className={active === "Company" ? "active" : ""}>
                <li onClick={() => onClk("Company")}>
                  <strong>
                    Company
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need">
                  <Link href="/about"><a>About Coinskite</a></Link>
                </li>
                <li className="need">
                  <Link href="/career"><a>Careers</a></Link>
                </li>
                <li className="need">
                  <Link href="/contact"><a>Contact</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Insights</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Work</a></Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className={active === "Services" ? "active" : ""}>
                <li onClick={() => onClk("Services")}>
                  <strong>
                    Services
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need">
                  <Link href="/services"><a>Blockchain development</a></Link>
                </li>
                <li className="need">
                  <Link href="/services"><a>Blockchain consultancy</a></Link>
                </li>
                <li className="need">
                  <Link href="/services"><a>Smart contract development</a></Link>
                </li>
                <li className="need">
                  <Link href="/services"><a>Smart contract audit</a></Link>
                </li>
                <li className="need">
                  <Link href="/services"><a>Defi</a></Link>
                </li>
                <li className="need">
                  <Link href="/services"><a>NFT</a></Link>
                </li>
                <li className="need">
                  <Link href="/services"><a>Tokenization</a></Link>
                </li>
                <li className="need">
                  <Link href="/services"><a>ICO | STO | IDO</a></Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="dfc">
            <div>
              <ul className={active === "Industries" ? "active" : ""}>
                <li onClick={() => onClk("Industries")}>
                  <strong>
                    Industries
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need">
                  <Link href="/"><a>Finance</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Healthcare</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Insurance</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Media</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Real Estate</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Sports</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Supplychain</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Government</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Law</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Digital Identity</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Social Media</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Logistics</a></Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className={active === "Customers" ? "active" : ""}>
                <li onClick={() => onClk("Customers")}>
                  <strong>
                    Customers
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need">
                  <Link href="/startup"><a>Startup</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Enterprise</a></Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="dfc">
            <div>
              <ul className={active === "Solutions" ? "active" : ""}>
                <li onClick={() => onClk("Solutions")}>
                  <strong>
                    Partners
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need">
                  <Link href="/"><a>Financial Advisors</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Partner portal</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Become a Partner</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Partner Terms and Conditions</a></Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className={active === "Resources" ? "active" : ""}>
                <li onClick={() => onClk("Resources")}>
                  <strong>
                    Resources
                    <Arrow className="head-arr" />
                  </strong>
                </li>
                <li className="need">
                  <Link href="/"><a>Resource Center</a></Link>
                </li>
                <li className="need">
                  <Link href="/guide"><a>Guide</a></Link>
                </li>
                <li className="need">
                  <Link href="/webinar"><a>Webinars</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>Podcast</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>help & Support</a></Link>
                </li>
                <li className="need">
                  <Link href="/"><a>API & Docs</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='df gap1 footer-final'>
          <p>@Copyright 2022,Coinskite Pvt. Ltd.All rights reserved</p>
          <a href="https://twitter.com/coinskite?s=08" rel="noreferrer" target="_blank">
            <img src="./img/footer/twitter.png" alt="twiter" />
          </a>
          <a href="https://www.linkedin.com/in/coins-kite" rel="noreferrer" target="_blank">
            <img src="./img/footer/ln.png" alt="linkedin" />
          </a>
          <a href="https://m.facebook.com/coinskite.coinskite" rel="noreferrer" target="_blank">
            <img src="./img/footer/fb.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/coinskite" rel="noreferrer" target="_blank">
            <img src="./img/footer/insta.png" alt="instagram" />
          </a>
          <a href="/" rel="noreferrer" target="_blank">
            <img src="./img/footer/Whatsapp.png" alt="Whatsapp" />
          </a>
          <a href="/" rel="noreferrer" target="_blank">
            <img src="./img/footer/medium.png" alt="Medium" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer