"use client";

import { useState } from "react";
import countryCodes from "@/constants/countryCodes";

function Contact() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    company: "",
    job: "",
    country: "",
    employees: "",
    looking: ""
  })

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <div className="theme-sec pad-main-3">
        <div className='contact-main-header max-w-7xl mx-auto'>
          <div className='contact-main-div1'>
            <h1 className='contact-m-h1 mb-16'>Leveraging the potential of blockchain through Coinskite solutions</h1>
            <h2 className='contact-m-h2 mb-16'>Overhead expense mitigation for startups and enterprises driven by state-of-the-art blockchain technology</h2>

            <p className='contact-m-p mb-8'>How can Coinskite help startups and enterprises?</p>
            <ul className='contact-m-ul'>
              <li>The easy transition of web2 applications into web3</li>
              <li>Expert guidance on blockchain systems and protocols</li>
              <li>Eliminate unwanted costs through one-time payment blockchain solutions</li>
            </ul>
          </div>

          <div className='contact-main-form'>
            <h2 className='center'>Contact us</h2>
            <div>
              <input
                className='input-box'
                placeholder='Name'
                type="text"
                name="name"
                value={details.name}
                onChange={onChange}
              />
              <input
                className='input-box'
                placeholder='Email'
                type="text"
                name="email"
                value={details.email}
                onChange={onChange}
              />
              <input
                className='input-box'
                placeholder='Company'
                type="text"
                name="company"
                value={details.company}
                onChange={onChange}
              />
              <input
                className='input-box'
                placeholder='Job Title'
                type="text"
                name="job"
                value={details.job}
                onChange={onChange}
              />

              <select
                className='input-box'
                name="country"
                value={details.country}
                onChange={onChange}
              >
                <option value="" disabled>Country/ Region</option>
                {
                  countryCodes.map(co => (
                    <option value={co} key={co}>
                      {co}
                    </option>
                  ))
                }
              </select>

              <select
                className='input-box'
                name="employees"
                value={details.employees}
                onChange={onChange}
              >
                <option value="" disabled>No of Employees</option>
                <option value="0-10 employess">0-10 employess</option>
                <option value="10-50 employess">10-50 employess</option>
                <option value="50-100 employess">50-100 employess</option>
                <option value="100-200 employess">100-200 employess</option>
              </select>

              <textarea
                className='input-box'
                placeholder='What are you looking for?'
                type="text"
                name="looking"
                value={details.looking}
                onChange={onChange}
                style={{ minHeight: '100px' }}
              ></textarea>

              <p>Provide details to help us personalize the consultation by better understanding your unique business challenges.</p>
              <button className='theme-sec'>Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pad-main-3 black-bg">
        <div className='contact-footer max-w-7xl mx-auto'>
          <img src='./img/logo/logo.png' alt="logo" />

          <div className='df gap-4 flex-wrap'>
            <p className="mr-auto">Copyright 2022 Coinskite Pvt Ltd</p>
            <p>Terms Of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact