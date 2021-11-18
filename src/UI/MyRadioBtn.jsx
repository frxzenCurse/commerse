import { Radio } from "antd"
import { useEffect } from "react"
import { useHistory, useLocation } from "react-router"

const MyRadioBtn = ({children, filter, change, ...props}) => {

  const url = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (change === props.value) {
      history.push(`?${url.search.substr(1)}` + `${url.search ? '&' : ''}${filter}=${props.value}`)
    }
  }, [change])

  return (
    <Radio {...props}>{children}</Radio>
  )
}

export default MyRadioBtn