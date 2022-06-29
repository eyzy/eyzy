import React from 'react'
import BaseInput from './BaseInput'
import { NumberInputProps } from './types/NumberInputProps'
import { isMob } from '../../common/is'

const INT_MATCH = /^-?(\d)+/

const processValue = (v: any, isInt?: boolean) => {
  if (v === '-') {
    return '-'
  }

  if (isInt) {
    return v.match(INT_MATCH)?.[0] || ''
  }

  if (!isFinite(v)) {
    v = parseFloat(v)
  }

  return v
}

export default React.memo(function NumberInput(props: NumberInputProps) {
  const value = undefined !== props.value 
    ? processValue(props.value, props.isInt)
    : ''

  return (
    <BaseInput 
      {...props} 
      type={isMob() ? 'number' : 'text'}
      value={value || ''}
    />
  )
})
