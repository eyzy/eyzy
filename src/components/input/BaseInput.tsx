import React, { forwardRef, Ref } from 'react'
import { BaseInputProps } from './types/BaseInputProps'
import Field from '../../view/field/Field'
import { cn } from '../../common/classNames'
import { isEsc, isEnter } from '../../common/keyboard'
import { parseWidth } from '../../common/dom'

function BaseInput(props: BaseInputProps, ref: Ref<any>) {
  const {
    processValue,

    className,
    width,
    fit,
    type,
    style,
    onPressEnter,
    onPressEsc,
    onKeyDown,
    onChange,
    ...rest
  } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val: string = processValue ? processValue(e.target.value) : e.target.value

    if (onChange) {
      onChange(val, e)
    }
  }

  const handleKeyDown = (e: any) => {
    if (onPressEnter && isEnter(e)) {
      onPressEnter(e)
    }

    if (onPressEsc && isEsc(e)) {
      onPressEsc(e)
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  const classNames = cn(
    type === 'textarea' ? 'e-textarea' : 'e-input',
    className
  )

  const parsedWidth = parseWidth(width)
  const elemStyle = style || {}

  if (parsedWidth) {
    elemStyle.width = parsedWidth
  }

  const ElementType: React.ElementType = type === 'textarea' ? 'textarea' : 'input'
  
  return (
    <ElementType 
      {...rest} 
      ref={ref}
      type={type || 'text'}
      className={classNames} 
      style={elemStyle}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )

  return (
    <Field 
      label={label} 
      helpText={helpText} 
      fit={fit} 
      required={required} 
      error={error} 
      component={Component} 
    />
  )
}

export default forwardRef(BaseInput)