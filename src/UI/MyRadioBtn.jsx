import { Radio } from "antd"
import { useEffect } from "react"
import { useHistory, useLocation } from "react-router"
import qs from 'qs'

const MyRadioBtn = ({ children, filter, init, change, ...props }) => {

  const url = useLocation()
  const history = useHistory()

  useEffect(() => {
    init(filter)
  }, [])

  useEffect(() => {
    if (change === props.value) {
      const id = qs.parse(url.search, { ignoreQueryPrefix: true })
      id[filter] = change

      history.push({
        search: qs.stringify(id, { indices: false })
      })
    }
  }, [change])

  return (
    <Radio {...props}>{children}</Radio>
  )
}

export default MyRadioBtn