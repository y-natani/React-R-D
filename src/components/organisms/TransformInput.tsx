import React, { useRef, useState } from 'react'
import { hiraToKana } from '@/helpers/Common/String'

const TransformInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')

  const clickHandler = () => {
    console.log(ref?.current?.value)
  }
  const blurHandler = (originalStr: string) => {
    // TODO: trim characters except for Katakana
    const convertedStr = originalStr

    setText(convertedStr)
  }

  return (
    <div>
      <input
        ref={ref}
        value={text}
        onChange={e => setText(hiraToKana(e.target.value))}
        onBlur={e => blurHandler(e.target.value)}
      />
      <button onClick={clickHandler}>get ref</button>
    </div>
  )
}

export default TransformInput
