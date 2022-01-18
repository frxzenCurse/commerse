import { Radio, Space } from 'antd';
import MyCheckbox from '../UI/MyCheckbox';
import MyRadioBtn from '../UI/MyRadioBtn';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs'

const FilterList = ({ values, multiple, filter, }) => {

  const [value, setValue] = useState(0)
  const { search } = useLocation()

  function setSingle(filter) {
    if (search) {
      const id = qs.parse(search, { ignoreQueryPrefix: true })
      if (id[filter]) setValue(Number(id[filter]))
    }
  }

  useEffect(() => {
    if (!search && value) {
      setValue(0)
    }
  }, [search])

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
        <Radio.Group value={value} onChange={e => setValue(e.target.value)}>
          {values.map(item =>
            <MyRadioBtn key={item.value} init={setSingle} filter={filter} change={value} value={item.value}>{item.title}</MyRadioBtn>
          )}
        </Radio.Group>
      }
    </Space>
  )
}

export default FilterList