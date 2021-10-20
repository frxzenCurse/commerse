import { Input } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Search = ({ value, onChange }) => {

  const context = useContext(ThemeContext)

  return (
    <div style={{ marginBottom: 40, }} className={context === 'dark' ? 'input-dark' : ''}>
      <Input value={value} onChange={e => onChange(e)} placeholder="Search" />
    </div>
  )
}

export default Search