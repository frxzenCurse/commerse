import { Radio, Space } from 'antd';
import MyCheckbox from '../UI/MyCheckbox';
import MyRadioBtn from '../UI/MyRadioBtn';

const FilterList = ({ values, multiple, filter, onChange, singleChange }) => {

  return (
    <Space direction='vertical'>
      {multiple
        ?
        values[filter].map(item =>
          <MyCheckbox 
            key={item.id} 
            filter={item} 
            value={filter} 
            onChange={onChange}
          />
        )
        :
        <Radio.Group defaultValue={null} onChange={e => singleChange(e.target.value, filter)}>
          {values[filter].map(item =>
            <MyRadioBtn key={item.id} value={item.id}>{item.title}</MyRadioBtn>
          )}
        </Radio.Group>
      }
    </Space>
  )
}

export default FilterList