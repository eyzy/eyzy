import React, { useMemo } from 'react'
import { uid } from '../../common/uid'
import { cn } from '../../common/classNames'
import { useFocusRing } from '../focusRing/useFocusRing'

import './style/field.scss'

interface FieldProps {
  required?: boolean
  fit?: boolean
  extra?: React.ReactElement
  ctrlClassName?: string
  helpText?: React.ReactElement
  label?: React.ReactElement
  error?: React.ReactElement
  component: React.ReactElement
  children: React.ReactElement | React.ReactElement[]
}

const Field: React.FC<FieldProps> = ({ component, children, ctrlClassName, label, helpText, fit, required, error }) => {
  const id = useMemo(() => `e-${uid()}`, [])

  const isFocused = component ? useFocusRing(id, component.props.autoFocus) : false
  const classNames = cn(
    'e-field',
    {
      fit,
      error,
    }
  )

  const ctrlClassNames = cn(
    'e-ctrl',
    ctrlClassName
  )

  const child = component
    ? React.cloneElement(component, {
      id,
      className: cn(
        component.props.className,
        {
          'e-ring': isFocused
        }
      )
    })
    : null

  const allowHtmlFor = component ? component.props.type !== 'checkbox' : false

  return (
    <div className={classNames}>
      {(label || helpText) && (
        <div className='e-info'>
          {label && (
            <label className='e-label' htmlFor={allowHtmlFor ? id : ''}>
              {label}
              {required && <span className='e-asterisk'>*</span>}
            </label>
          )}

          {helpText && (
            <div className='e-help'>{helpText}</div>
          )}
        </div>
      )}

      <div className={ctrlClassNames}>
        {child}
        {children}
      </div>

      {error && (
        <div className='e-error'>{error}</div>
      )}
    </div>
  )
}

export default Field