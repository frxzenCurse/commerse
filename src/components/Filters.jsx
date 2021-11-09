import { Collapse } from 'antd';
import { useEffect, useState } from "react";
import axios from "axios";
import { useFetching } from '../hooks/useFetching';
import Loader from "./Loader";
import FilterList from "./FilterList";

const { Panel } = Collapse;

const Filters = ({onChange, singleChange}) => {

  const [data, setData] = useState(null)

  const [fetchData, isLoading, error] = useFetching(async () => {
    const response = await axios.post('https://api.d4u.dev.dterra.eu/api/project/filter', {
      objectTypeId: [4],
      squareMin: 30,
      squareMax: 60
    })

    setData(response.data.data.filter);
  })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='filters'>
      {error && <h1 style={{ color: 'red' }}>{error}</h1>}
      {isLoading
        ?
        <Loader />
        :
        <Collapse>
          {data.options.map(item =>
            <Panel header={item.name} key={item.filter} forceRender={true}>
              <FilterList 
                onChange={onChange} 
                multiple={item.multiple} 
                filter={item.filter} 
                values={data.values} 
                singleChange={singleChange}
              />
            </Panel>
          )}
        </Collapse>
      }
    </div>
  )
}

export default Filters