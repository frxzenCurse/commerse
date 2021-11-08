import { Checkbox } from "antd"
import { useState } from "react"


const MyCheckbox = ({ children, ...props }) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} {...props}>{children}</Checkbox>
  )
}

export default MyCheckbox