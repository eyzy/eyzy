import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

export interface BaseCheckboxProps {
  appearance?: 'minimal' | 'outlined' | string,
  intent?: 'primary' | 'warning' | 'success' | 'danger',
  active?: boolean,
  shape?: 'circle' | 'extended' | 'rect',
  size?: 'sm' | 'lg',
  fit?: boolean
}

export type CheckboxProps = Partial<InputHTMLAttributes<any> & BaseCheckboxProps>

export default React.memo(function Checkbox(props: CheckboxProps) {
  const {
    className,
    ...rest
  } = props

  const classNames = cn(
    'checkbox',
    className
  )

  return (
    <span className={classNames} >
        <input
          type="checkbox"
          {...rest}
        />
      </span>
  )
})