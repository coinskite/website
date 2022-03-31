function Card({ src, title, para }) {
  return (
    <div className="center dfc car-stack-item">
      <img src={src} alt={title} />
      <h4>{title}</h4>
      <p className="f-14">{para}</p>
    </div>
  )
}

function Sect3() {
  return (
    <div className="black-bg">
      <h1 className="center p-16 carre-ben-h1">The Benefits of Decentralized Work</h1>

      <div className="max-w">
        <div className="career-stack-list">
          <Card
            src="./img/career/benefit/1.png"
            title="Remote First"
            para=" You ’ll be joining a company based each over the world. Furnishing the unique occasion to work with people from across the country."
          />
          <Card
            src="./img/career/benefit/2.png"
            title="Flexible working"
            para="With our global manpower, we've OK-tuned asynchronous working which means we've a lot of inflexibility in the structure of when we work and how we work together."
          />
          <Card
            src="./img/career/benefit/3.png"
            title="Company Equity"
            para="We believe in power and want everyone to have a stake in our unborn success, that’s why you ’ll admit equity when you join us."
          />
          <Card
            src="./img/career/benefit/4.png"
            title="Competitive salary"
            para="Compensation in line with the Blockchain industriousness"
          />
          <Card
            src="./img/career/benefit/5.png"
            title="Unlimited Vacation"
            para="Take a vacation on any day of the time."
          />
          <Card
            src="./img/career/benefit/6.png"
            title="Hiring Practices that Promote Diversity"
            para="The workplace creates a more well-rounded employee experience that gives our companies."
          />
        </div>
      </div>
    </div>
  )
}

export default Sect3