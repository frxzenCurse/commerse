import { Select } from 'antd';

const { Option } = Select;

const Filters = ({ placeholder, options, onChange }) => {

  return (
    <div>
      <Select placeholder={placeholder} style={{ width: 220 }} onChange={onChange} >
        {options.map(option =>
          <Option key={option.value} value={option.value}>{option.name}</Option>
        )}
      </Select>
    </div>
  )
}

export default Filters