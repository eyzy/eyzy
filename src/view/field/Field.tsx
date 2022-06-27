import React, { useMemo } from 'react'
import { uid } from '../../common/uid'
import { cn } from '../../common/classNames'

import './style/field.scss'

interface FieldProps {
  required?: boolean
  fit?: boolean
  helpText?: React.ReactElement
  label?: React.ReactElement
  error?: React.ReactElement
}

const Field: React.FC<FieldProps> = ({ label, helpText, children, fit, required, error }) => {
  const id = useMemo(() => `e-${uid()}`, [])
  const classNames = cn(
    'e-field',
    {
      fit,
      error
    }
  )

  // @ts-ignore
  const child = React.cloneElement(children, {
    id
  })

  return (
    <div className={classNames}>
      {label && (
        <label className='e-label' htmlFor={id}>
          {label}
          {required && <span className='e-asterisk'>*</span>}
        </label>
      )}

      <div className='e-ctrl'>{child}</div>

      {error && (
        <div className='e-error'>{error}</div>
      )}

      {helpText && (
        <div className='e-help'>{helpText}</div>
      )}
    </div>
  )

  return (
    <div className={classNames}>
      <div className='e-ctrl'>
        {child}
      </div>
    </div>
  )
}

export default Field