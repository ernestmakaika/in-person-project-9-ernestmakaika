import { useState, useEffect } from 'react'

// Custom hook that fetches JSON from a URL.
// Accepts a URL and returns { data, loading, error }.
// Uses an AbortController so an in-flight fetch is cancelled on cleanup.

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(url, { signal: abortController.signal })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => abortController.abort()
  }, [url])

  return { data, loading, error }
}
