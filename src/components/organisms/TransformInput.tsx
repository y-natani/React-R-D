import React, { useRef, useState, useMemo } from 'react'
import { css } from '@emotion/react'
import { hiraToKana } from '@/helpers/Common/String'

const TransformInput = () => {
  const ref = useRef<HTMLInputElement>(null)

  const [beforeConvText, setBeforeConvText] = useState('')

  const afterConvText = useMemo(() => {
    console.log('===afterConvText===')
    return hiraToKana(beforeConvText)
  }, [beforeConvText])

  const clickHandler = () => {
    console.log('===clickHandler===')
  }

  return (
    <div>
      <div css={styles.space}>
        Before convert
        <input ref={ref} onBlur={e => setBeforeConvText(e.target.value)} />
        <button onClick={clickHandler}>Check Queue</button>
      </div>
      <div css={styles.space}>
        After convert
        <input defaultValue={afterConvText}></input>
      </div>
    </div>
  )
}

const styles = {
  space: css`
    margin: 10px 0;
  `,
}

export default TransformInput
