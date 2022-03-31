function Card({ src, txt }) {
  return (
    <div className="df career-team p-8 br5">
      <img className="carrer-team-img" src={src} alt={txt} />
      <p className="flex1">{txt}</p>
    </div>
  )
}

function Team() {
  return (
    <div className="pad-main-1-3 max-w">
      <h1 className="carrer-team-h1">Choose Your Team</h1>

      <div className="career-stack-list">
        <Card
          src="./img/career/team/Business.png"
          txt="Business Development"
        />
        <Card
          src="./img/career/team/Communications.png"
          txt="Communications"
        />
        <Card
          src="./img/career/team/Customer.png"
          txt="Customer Support"
        />
        <Card
          src="./img/career/team/Data.png"
          txt="Data & Research"
        />
        <Card
          src="./img/career/team/Editorial.png"
          txt="Editorial & Video"
        />
        <Card
          src="./img/career/team/Engineering.png"
          txt="Engineering"
        />
        <Card
          src="./img/career/team/Finance.png"
          txt="Finance & Administration"
        />
        <Card
          src="./img/career/team/Legal.png"
          txt="Legal & Compliance"
        />
        <Card
          src="./img/career/team/Marketing.png"
          txt="Marketing"
        />
        <Card
          src="./img/career/team/Operations.png"
          txt="Operations, Strategy & Project Management"
        />
        <Card
          src="./img/career/team/Product.png"
          txt="Product & Design"
        />
        <Card
          src="./img/career/team/Quantitative.png"
          txt="Quantitative Strategy"
        />
        <Card
          src="./img/career/team/Security.png"
          txt="Security & IT Helpdesk"
        />
        <Card
          src="./img/career/team/hr.png"
          txt="HR"
        />
        <Card
          src="./img/career/team/Internships.png"
          txt="Internships"
        />
      </div>
    </div>
  )
}

export default Team