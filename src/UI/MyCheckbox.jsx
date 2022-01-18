import { Checkbox } from "antd"
import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import qs from 'qs'

const MyCheckbox = ({ value, filter }) => {

  const [isMounted, setIsMounted] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const url = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (url.search) {
      const id = qs.parse(url.search, { ignoreQueryPrefix: true })

      if (id[value]) {
        if (id[value].length > 1) {
          const result = id[value].map(Number).filter(item => item === filter.value)

          if (result.length) {
            setIsChecked(true)
          }
        } else {
          if (Number(id[value]) === filter.value) {

            setIsChecked(true)
          }
        }
      }
    } else {
      setIsChecked(false)
    }
  }, [url.search])

  useEffect(() => {
    if (isMounted) {

      if (isChecked) {
        history.push({
          search: `${url.search.substr(1)}` + `${url.search ? '&' : ''}${value}=${filter.value}`
        })
      } else {
        const search = qs.parse(url.search, { ignoreQueryPrefix: true })

        if (url.search) {
          if (search[value].length > 1) {
            search[value] = search[value].filter(item => +item !== filter.value)

            history.push({
              search: qs.stringify(search, { indices: false })
            })
          } else {
            delete search[value]
            history.push({
              search: qs.stringify(search, { indices: false })
            })
          }
        }
      }
    }
  }, [isChecked])

  function onChange() {
    setIsMounted(true)
    setIsChecked(!isChecked)
  }

  return (
    <Checkbox checked={isChecked} onChange={onChange}>{filter.title}</Checkbox>
  )
}

export default MyCheckbox