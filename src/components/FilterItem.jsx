import { useState } from "react"

const FilterItem = ({filter, values, multiple}) => {

  const [isActive, setIsActive] = useState(false) 

  return (
    <>
      {values[filter].map(item => 
        <div className={isActive ? 'active' : null} key={item.id}>{item.title}</div>
      )}
    </>
  )
}

export default FilterItem