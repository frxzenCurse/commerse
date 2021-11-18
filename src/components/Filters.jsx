import { Collapse } from 'antd';
import { useEffect, useState } from "react";
import axios from "axios";
import { useFetching } from '../hooks/useFetching';
import Loader from "./Loader";
import FilterList from "./FilterList";
import Slide from 'react-reveal/Slide';
import qs from 'qs'
import { useLocation } from 'react-router';

const { Panel } = Collapse;

const Filters = ({ onChange }) => {

  const [data, setData] = useState(null)
  const {search} = useLocation()
  const [fetchData, isLoading, error] = useFetching(async () => {
    const response = await axios.post('https://api.d4u.dev.dterra.eu/api/project/filter', {
      view: "projectMain",
      priceSegmentId: [1]
    })

    setData(response.data.data.filter);
  })

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (search) {
      const url = qs.parse(search.substr(1))
      for (let key in url) {
        onChange(key, url[key])
      }
    }
  }, [search])

  return (
    <div className='filters'>
      {error && <h1 style={{ color: 'red' }}>{error}</h1>}
      {isLoading
        ?
        <Loader />
        :
        <Slide left>
          <Collapse>
            {data
              ?
              data.map(item =>
                <Panel header={item.name} key={item.filter} forceRender={true}>
                  <FilterList 
                    onChange={onChange} 
                    multiple={item.multiple} 
                    filter={item.filter} 
                    values={item.values} 
                  />
                </Panel>
              )
              :
              null
            }
          </Collapse>
        </Slide>
      }
    </div>
  )
}

export default Filters