import { Radio } from 'antd';

const ThemeChanger = ({onChange}) => {
  return (
    <div>
      <Radio.Group defaultValue="light" buttonStyle="solid" onChange={onChange}>
        <Radio.Button value="light">Light</Radio.Button>
        <Radio.Button value="dark">Dark</Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default ThemeChanger