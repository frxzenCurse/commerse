import { Radio, Space } from 'antd';
import MyCheckbox from '../UI/MyCheckbox';
import MyRadioBtn from '../UI/MyRadioBtn';

const FilterList = ({ values, multiple, filter }) => {

  return (
    <Space direction='vertical'>
      {multiple
        ?
        values[filter].map(item =>
          <MyCheckbox key={item.id}>{item.title}</MyCheckbox>
        )
        :
        <Radio.Group defaultValue={null} onChange={e => console.log(e)}>
          {values[filter].map(item =>
            <MyRadioBtn key={item.id} value={item.id}>{item.title}</MyRadioBtn>
          )}
        </Radio.Group>
      }
    </Space>
  )
}

export default FilterList