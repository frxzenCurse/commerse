import { Select } from 'antd';

const { Option } = Select;

const Sort = ({ placeholder, options, onChange }) => {

  return (
    <div>
      <Select placeholder={placeholder} onChange={onChange} style={{ width: '100%' }} >
        {options.map(option =>
          <Option key={option.value} value={option.value}>{option.name}</Option>
        )}
      </Select>
    </div>
  )
}

export default Sort