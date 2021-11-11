import { Input } from 'antd';

const Search = ({ value, onChange }) => {

  return (
    <div style={{ marginBottom: 40, }}>
      <Input value={value} onChange={e => onChange(e)} placeholder="Search" />
    </div>
  )
}

export default Search