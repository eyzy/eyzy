import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

import './style.scss'

export interface BaseButtonProps {
  intent?: 'primary' | 'warning' | 'success' | 'danger'
  appearance?: 'minimal' | 'outlined'
  fit?: boolean
  shape?: 'circle' | 'extended' | 'rect',
  size?: 'sm' | 'lg'
}

export type ButtonProps = Partial<AnchorHTMLAttributes<any> & ButtonHTMLAttributes<any> & BaseButtonProps>

export default React.memo(function Button(props: ButtonProps) {
  const {
    appearance,
    className,
    children,
    intent,
    shape,
    type,
    size,
    fit,
    ...rest
  } = props

  const classNames = cn(
    'btn',
    appearance && `btn-${appearance}`,
    intent && `btn-${intent}`,
    shape && `btn-${shape}`,
    size && `${size}`,
    fit && 'btn-fit',
    className
  )

  return (
    <button className={classNames} {...rest}>
      { children }
    </button>
  )
})