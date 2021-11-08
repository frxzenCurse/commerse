import { Radio } from "antd"


const MyRadioBtn = ({children, ...props}) => {
  return (
    <Radio {...props}>{children}</Radio>
  )
}

export default MyRadioBtn