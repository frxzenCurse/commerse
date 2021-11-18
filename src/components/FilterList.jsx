import { Radio, Space } from 'antd';
import MyCheckbox from '../UI/MyCheckbox';
import MyRadioBtn from '../UI/MyRadioBtn';
import { useState } from 'react';

const FilterList = ({ values, multiple, filter, }) => {

  const [value, setValue] = useState(0)

  return (
    <Space direction='vertical'>
      {multiple
        ?
        values.map(item =>
          <MyCheckbox
            key={item.value}
            filter={item}
            value={filter}
          />
        )
        :
        <Radio.Group defaultValue={null} onChange={e => setValue(e.target.value)}>
          {values.map(item =>
            <MyRadioBtn key={item.value} filter={filter} change={value} value={item.value}>{item.title}</MyRadioBtn>
          )}
        </Radio.Group>
      }
    </Space>
  )
}

export default FilterList