import React, { useMemo } from 'react'
import { uid } from '../../common/uid'
import { cn } from '../../common/classNames'

import './style/field.scss'

interface FieldProps {
  required?: boolean
  fit?: boolean
  helpText?: React.ReactElement
  label?: React.ReactElement
}

const Field: React.FC<FieldProps> = ({ label, helpText, children, fit, required }) => {
  const id = useMemo(() => `e-${uid()}`, [])
  const classNames = cn(
    'e-field',
    {
      fit
    }
  )

  // @ts-ignore
  const child = React.cloneElement(children, {
    id
  })

  if (label || helpText) {
    return (
      <div className={classNames}>
        {label && (
          <label className='e-label' htmlFor={id}>
            {label}
            {required && <span className='e-asterisk'>*</span>}
          </label>
        )}

        {helpText && (
          <div className='e-help'>{helpText}</div>
        )}

        <div className='e-ctrl'>{child}</div>
      </div>
    )
  }

  return (
    <div className={classNames}>{child}</div>
  )
}

export default Field