import { Select } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const { Option } = Select;

const Filters = ({ placeholder, options, onChange }) => {

  const context = useContext(ThemeContext)

  return (
    <div className={context === 'dark' ? 'select-dark' : ''}>
      <Select placeholder={placeholder} style={{ width: 220 }} onChange={onChange} >
        {options.map(option =>
          <Option key={option.value} value={option.value}>{option.name}</Option>
        )}
      </Select>
    </div>
  )
}

export default Filters