import { Checkbox } from "antd"
import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"

const MyCheckbox = ({ value, filter }) => {

  const [isChecked, setIsChecked] = useState(false)
  const url = useLocation()
  const history = useHistory()


  useEffect(() => {
    if (isChecked) {
      history.push(`?${url.search.substr(1)}` + `${url.search ? '&' : ''}${value}=${filter.value}`)
    } else {
      if (url.search) {
        const y = `${value}=${filter.value}`
        const result = url.search.match(y)
        if (result) {
          const x = url.search.substr(result.index - 1, y.length + 1)

          history.push(url.search.replace(x, ''))
        }
      }
    }
  }, [isChecked])

  return (
    <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)}>{filter.title}</Checkbox>
  )
}

export default MyCheckbox