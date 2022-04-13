function Header() {
  return (
    <>
      <div className="theme-sec dfc jcc gap1 p-16 center theme-header pr home-header">
        <h1 className="home-header-h1">
          We built cutting - Edge products <br />
          using blockchain technologies
        </h1>
        <p className="home-header-p">
          Delivering Blockchain solutions to drive business <br />
          outcomes for startups and enterprises
        </p>
        <p style={{ marginBottom: "5rem" }}>
          <button className="home-header-btn">
            Consult our Blockchain Experts
          </button>
        </p>

        <img src='./img/home/cube.png' alt="cube" className="cube-img" />
      </div>
    </>
  )
}

export default Header