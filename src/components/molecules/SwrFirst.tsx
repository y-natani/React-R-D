import { fetcher, Param } from '@/helpers/Common/Api'
import { boolToStr } from '@/helpers/Common/String'
import { useCounter, useForceUpdate } from '@/helpers/Hooks/Counter'
import React, { FC, useEffect, useState } from 'react'
import useSWR from 'swr'

interface Props {
  children: JSX.Element | string
}

const useSomeApi = (defaultParam = {} as Param) => {
  //  無限renderingを防ぐため、一度useStateで受け取る方が良い
  const [param, setParam] = useState(defaultParam)
  const endpoint = 'https://jsonplaceholder.typicode.com/posts/1'
  // nullのときはRequestを投げない
  const fetcherParam = param ? [endpoint, param] : null
  const { data, error, isValidating } = useSWR(fetcherParam, fetcher)

  return {
    isValidating,
    data,
    error,
  }
}

const SwrFirst: FC<Props> = ({ children }) => {
  const { isValidating, data, error } = useSomeApi()
  const counter = useCounter(data)

  return (
    <div>
      <h2>{children}</h2>
      <div>isValidating: {boolToStr(isValidating)}</div>
      <div>data returned: {boolToStr(data)}</div>
      <div>has error: {boolToStr(error)}</div>
      <div>request counter: {counter}</div>
    </div>
  )
}

export default SwrFirst
