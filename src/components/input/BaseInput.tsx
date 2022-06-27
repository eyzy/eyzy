import React, { forwardRef, Ref, useEffect, useState } from 'react'
import { BaseInputProps } from './types/BaseInputProps'
import Field from '../../view/field/Field'
import FocusRing from '../../view/focusRing/FocusRing'
import { cn } from '../../common/classNames'
import { isEsc, isEnter } from '../../common/keyboard'
import { parseWidth } from '../../common/dom'

function BaseInput(props: BaseInputProps, ref: Ref<any>) {
  const {
    className,
    width,
    required,
    fit,
    type,
    style,
    helpText,
    label,
    onPressEnter,
    onPressEsc,
    onKeyDown,
    onChange,
    ...rest
  } = props

  const [value, setValue] = useState(props.value || props.defaultValue || '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val: string = e.target.value

    if (onChange) {
      onChange(val, e)
    } else {
      setValue(val)
    }
  }

  useEffect(() => {
    if (onChange) { // controlled
      setValue(props.value || '')
    }
  }, [props.value])

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
    <Field label={label} helpText={helpText} fit={fit} required={required}>
      <FocusRing>
        <ElementType 
          {...rest} 
          ref={ref}
          value={value}
          type={type || 'text'}
          className={classNames} 
          style={elemStyle}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </FocusRing>
    </Field>
  )
}

export default forwardRef(BaseInput)