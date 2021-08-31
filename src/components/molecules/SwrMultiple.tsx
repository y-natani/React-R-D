import { fetcher, Param } from '@/helpers/Common/Api'
import { boolToStr } from '@/helpers/Common/String'
import { useCounter } from '@/helpers/Hooks/Counter'
import React, { FC, useState } from 'react'
import useSWR from 'swr'

interface Props {
  children: JSX.Element | string
}

// 初回rendering時に起動するにはパラメータを渡す
// 連続実行時は最後の結果だけ返ってくる？？
const useSomeApi = () => {
  //  無限renderingを防ぐため、一度useStateで受け取る方が良い
  //  連続実行制御とかもできそう
  const [param, setParam] = useState<null | { [key: string]: any }>(null)
  const endpoint = 'https://jsonplaceholder.typicode.com/posts/1'
  const fetcherParam = param ? [endpoint, param] : null
  const { data, error, isValidating } = useSWR(fetcherParam, fetcher)

  return {
    isValidating,
    data,
    error,
    setParam,
  }
}

const SwrMultiple: FC<Props> = ({ children }) => {
  const { isValidating, data, error, setParam } = useSomeApi()
  const counter = useCounter(data)

  return (
    <div>
      <h2>{children}</h2>
      <div>isValidating: {boolToStr(isValidating)}</div>
      <div>data returned: {boolToStr(data)}</div>
      <div>has error: {boolToStr(error)}</div>
      <div>request counter: {counter}</div>
      <div>
        <button onClick={() => setParam({ aa: Math.random() })}>Fire</button>
      </div>
    </div>
  )
}

export default SwrMultiple
