import React from 'react'
import BaseInput from './BaseInput'
import { NumberInputProps } from './types/NumberInputProps'
import { isMob } from '../../common/is'

const INT_MATCH = /^-?(\d)+/

const toNumber = (v: any, isInt?: boolean) => {
  if (v === '-') {
    return '-'
  }

  v = v
    .replace(/\s/g, '')
    .replace(/,/g, '.')

  if (isInt) {
    return v.match(INT_MATCH)?.[0] || ''
  }

  if (!isFinite(v)) {
    v = parseFloat(v)
  }

  return v
}

export default React.memo(function NumberInput(props: NumberInputProps) {
  const {
    isInt,
    ...rest
  } = props

  const processValue = (val: any) => toNumber(val, isInt)

  return (
    <BaseInput 
      {...rest} 
      type={'text'}
      inputMode={isMob() ? 'decimal' : 'text'}
      processValue={processValue}
    />
  )
})
