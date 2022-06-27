import React from 'react'
import BaseInput from './BaseInput'
import { BaseInputProps } from './types/BaseInputProps'

export default React.memo(function Input(props: BaseInputProps) {
  return (
    <BaseInput {...props} />
  )
})
