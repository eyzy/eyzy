import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'
import { BaseButtonProps } from './types/BaseButtonProps'


const Button: React.FC<BaseButtonProps> 
  = ({
    variant, 
    className, 
    children, 
    type = 'button',
    ...rest
  }) => {

  const classNames = cn(
    'e-btn',
    variant && `e-btn-${variant}`,
    className
  )

  return (
    <button type={type} className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default Button


export interface BaseButtonProps2 {
  appearance?: 'minimal' | 'outlined' | string,
  intent?: 'primary' | 'warning' | 'success' | 'danger',
  active?: boolean,
  shape?: 'circle' | 'extended' | 'rect',
  size?: 'sm' | 'lg',
  fit?: boolean
}

export type ButtonProps2 = Partial<AnchorHTMLAttributes<any> & ButtonHTMLAttributes<any> & BaseButtonProps2>

export const aaa  =  React.memo(function Button(props: ButtonProps2) {
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
    <button type={type} className={classNames} {...rest}>
      { children }
    </button>
  )
})