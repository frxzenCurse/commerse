import { Radio } from 'antd';

const ThemeChanger = ({onChange, theme}) => {

  return (
    <div>
      {theme &&
        <Radio.Group defaultValue={theme} buttonStyle="solid" onChange={onChange}>
          <Radio.Button value="light">Light</Radio.Button>
          <Radio.Button value="dark">Dark</Radio.Button>
        </Radio.Group>
      }
    </div>
  )
}

export default ThemeChanger