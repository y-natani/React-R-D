import React from 'react'
import SwrFirst from '@/molecules/SwrFirst'
import SwrOnce from '@/molecules/SwrOnce'
import SwrMultiple from '@/molecules/SwrMultiple'

const UseSWRTest = () => {
  return (
    <div>
      <SwrFirst>任意の1回のみ実行</SwrFirst>
      <hr />
      <SwrOnce>任意の1回のみ実行</SwrOnce>
      <hr />
      <SwrMultiple>任意の複数回実行</SwrMultiple>
    </div>
  )
}

export default UseSWRTest
