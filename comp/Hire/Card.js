import { useRouter } from 'next/router'
import Arrow from '../../svg/arrows/white.svg';

function Card({ title, roles = [] }) {
  const router = useRouter()

  const push = id => router.push(`/hire/${id}`)

  return (
    <div className='hire-card'>
      <div className='df hire-card-title'>
        <p>{title}</p>
        <p>{roles.length} Open Roles</p>
      </div>

      <div className='cp hire-card-info'>
        {
          roles.map(role => (
            <div
              key={role._id}
              className="hire-card-info-sec"
              onClick={() => push(role._id)}
            >
              <h1>{role.title}</h1>

              <div className='df'>
                <div className='flex1 ellipsis2'>
                  {role.description}
                </div>

                <div className='theme-clr'>
                  <p>{role.location}</p>
                  <p>{role.workType}</p>
                </div>

                <div>
                  <Arrow />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Card