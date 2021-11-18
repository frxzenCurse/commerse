import { useHistory, useLocation } from "react-router"
import qs from 'qs'
import { useEffect } from "react"

const Profile = () => {

  const history = useHistory()
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (search) {
      const id = search.slice(1, search.length)
      const value = qs.parse(id)
      console.log(value);
      // console.log(value);
    }
  }, [search])

  return (
    <div className="container">
      <button onClick={() => history.push('?price=1&price=2')}>click</button>
      <button onClick={() => history.push(pathname + search + '&under=2')}>sssszxc</button>
    </div>
  )
}

export default Profile