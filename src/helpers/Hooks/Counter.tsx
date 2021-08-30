import { useEffect, useState } from 'react'

export function useForceUpdate() {
  const [value, setValue] = useState(0) // integer state
  return () => setValue(value => value + 1) // update the state to force render
}

export const useCounter = (watchTarger: any) => {
  const [requestCounter, setRequestCounter] = useState(0)
  useEffect(() => {
    if (watchTarger) {
      setRequestCounter(requestCounter + 1)
    }
  }, [watchTarger])
  return requestCounter
}
