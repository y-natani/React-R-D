import { fetcher, Param } from '@/helpers/Common/Api'
import { boolToStr } from '@/helpers/Common/String'
import { useCounter, useForceUpdate } from '@/helpers/Hooks/Counter'
import React, { FC, useEffect, useState } from 'react'
import useSWR from 'swr'

interface Props {
  children: JSX.Element | string
}

const useSomeApi = (defaultParam = {} as Param) => {
  const [fire, setFire] = useState(false)
  const [param] = useState(defaultParam)
  const endpoint = 'https://jsonplaceholder.typicode.com/posts/1'
  const fetcherParam = fire ? [endpoint, param] : null
  const { data, error, isValidating } = useSWR(fetcherParam, fetcher)

  return {
    isValidating,
    data,
    error,
    fire: () => setFire(true),
  }
}

const SwrOnce: FC<Props> = ({ children }) => {
  const { isValidating, data, error, fire } = useSomeApi()
  const counter = useCounter(data)

  return (
    <div>
      <h2>{children}</h2>
      <div>isValidating: {boolToStr(isValidating)}</div>
      <div>data returned: {boolToStr(data)}</div>
      <div>has error: {boolToStr(error)}</div>
      <div>request counter: {counter}</div>
      <div>
        <button onClick={fire}>fire</button>
      </div>
    </div>
  )
}

export default SwrOnce
