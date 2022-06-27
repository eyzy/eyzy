import React, { useState } from 'react'
import BaseInput from './BaseInput'
import { NumberInputProps } from './types/NumberInputProps'
import { isMob } from '../../common/is'

const INT_RE = /\-?\d+/
const FLOAT_RE = /^\-?\d*\.?\d*$/

const precessValue = (v: any, isInt?: boolean) => {
  let val = v
    .replace(/,/g, '.')
    .replace(/\-+/g, '-')

  if (val === '-') {
    return val
  }

  if (val) {
    if (isInt) {
      if (!INT_RE.test(val)) {
        return null
      }
    } else {
      if (!FLOAT_RE.test(val)) {
        return null
      } 
    }
  } else {
    return ''
  }

  return isFinite(val) 
    ? val 
    : isFinite(v) ? v : ''
}

export default React.memo(function NumberInput(props: NumberInputProps) {
  const [value, setValue] = useState(precessValue(props.value || props.defaultValue || ''))

  const handleChange = (value: string | number, e: React.ChangeEvent<HTMLInputElement>) => {
    let val = precessValue(value, props.isInt)

    if (val === null) {
      return
    }

    if (props.onChange) {
      props.onChange(value, e)
    }

    setValue(val)
  }

// всетаки сделать onchange(value: string | Number, ORIGINAL_EVENT as 2th argument)
// тут useEffect ([defaultValue and value])

  return (
    <BaseInput 
      {...props} 
      type={isMob() ? 'number' : 'text'}
      value={value}
      onChange={handleChange}
    />
  )
})
