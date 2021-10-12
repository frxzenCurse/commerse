import { useMemo } from "react"


export const useSearch = ((arr, selectedSort, value) => {

  const sorted = useMemo(() => {
    if (selectedSort) {
      return [...arr].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return arr
  }, [arr, selectedSort])

  const sortAndSearch = useMemo(() => {
    return [...sorted].filter(item => item.title.includes(value.toLowerCase()))
  }, [sorted, value])

  return sortAndSearch
})

