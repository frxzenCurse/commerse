import { Select } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const { Option } = Select;

const Sort = ({ placeholder, options, onChange }) => {

  const context = useContext(ThemeContext)

  return (
    <div className={context === 'dark' ? 'select-dark' : ''}>
      <Select placeholder={placeholder} onChange={onChange} style={{ width: '100%' }} >
        {options.map(option =>
          <Option key={option.value} value={option.value}>{option.name}</Option>
        )}
      </Select>
    </div>
  )
}

export default Sort