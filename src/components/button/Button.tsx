import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'


export interface BaseButtonProps {
  appearance?: 'minimal' | 'outlined' | string,
  intent?: 'primary' | 'warning' | 'success' | 'danger',
  active?: boolean,
  shape?: 'circle' | 'extended' | 'rect',
  size?: 'sm' | 'lg',
  fit?: boolean
}

export type ButtonProps = Partial<AnchorHTMLAttributes<any> & ButtonHTMLAttributes<any> & BaseButtonProps>

export default React.memo(function Button(props: ButtonProps) {
  const {
    appearance,
    className,
    children,
    intent,
    active,
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
    active && `btn-active`,
    shape && `btn-${shape}`,
    size && `btn-${size}`,
    fit && 'btn-fit',
    className
  )

  return (
    <button className={classNames} {...rest}>
      { children }
    </button>
  )
})