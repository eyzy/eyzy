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
    'eyzy-btn',
    appearance && `eyzy-btn-${appearance}`,
    intent && `eyzy-btn-${intent}`,
    active && `eyzy-btn-active`,
    shape && `eyzy-btn-${shape}`,
    size && `eyzy-btn-${size}`,
    fit && 'eyzy-btn-fit',
    className
  )

  return (
    <button className={classNames} {...rest}>
      { children }
    </button>
  )
})