function Share() {
  return (
    <div className='dfc jcc theme-sec pad-main-1-3 about-share'>
      <h1>SHARE NOW</h1>

      <div className='df'>
        <img src="./img/footer/insta.png" alt="instagram" />
        <img src="./img/footer/twit.png" alt="twitter" />
        <img src="./img/footer/fb.png" alt="facebook" />
        <img src="./img/footer/linkedin.png" alt="linkedin" />
      </div>

      <div id='son'>Subscribe Our News</div>

      <div className='df gap1'>
        <label htmlFor="Share-Email">Email</label>
        <input type="text" id='Share-Email' />
      </div>

      <div><button className='black-bg p-8-16'>Subscribe</button></div>
    </div>
  )
}

export default Share