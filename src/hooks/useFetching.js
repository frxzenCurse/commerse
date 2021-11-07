import { useState } from "react"

export const useFetching = (callback) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetching = async () => {
    try {
      // setIsLoading(true)

      await callback()
    } catch (e) {
      setError(`Произошла ошибка ${e}`)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}