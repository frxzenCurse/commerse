import { useSelector } from "react-redux"

const Profile = () => {

  const user = useSelector(state => state.user)

  return (
    <div className="container">
      <div className='user'>
        <div className="user__col">
          <img className="user__avatar" src={'https://api.d4u.dev.dterra.eu/public' + user.user.avatar} alt="" />
        </div>
        <div className="user__col">
          <div className="user__name">{user.user.name} {user.user.surname}</div>
          <div className="user__email">{user.user.email}</div>
          {user.user.phone && <div className="user__phone">{user.user.phone}</div>}
        </div>
      </div>
    </div>
  )
}

export default Profile