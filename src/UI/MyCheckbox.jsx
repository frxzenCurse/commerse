import { Checkbox } from "antd"
import { useEffect, useState } from "react"


const MyCheckbox = ({ value, filter, onChange }) => {

  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    onChange(isChecked, value, filter.id)
  }, [isChecked])

  return (
    <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)}>{filter.title}</Checkbox>
  )
}

export default MyCheckbox