import { useRouter } from 'next/router';

function Header() {
  const router = useRouter()

  return (
    <div className="theme-sec df pad-main-3 theme-header">
      <div className="dfc pad-main-3 gap1">
        <h1 className="career-header-h1">Blockchain careers at Coinskite</h1>
        <p className="career-header-p">At Coinskite, you ’ll work with teammates across the globe to structure framework, products, and services for the Blockchain ecosystem and other decentralized technologies.</p>
        <p className="mt-16">
          <button className="black-bg br5" onClick={() => router.push('/hire')}>Browse Open Roles</button>
        </p>
      </div>
    </div>
  )
}

export default Header