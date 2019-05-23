import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

import './style.scss'

export interface BaseButtonProps {
  variant?: string
  fit?: boolean
  shape?: 'circle' | 'extended',
  size?: 'sm' | 'lg'
}

export type ButtonProps = Partial<AnchorHTMLAttributes<any> & ButtonHTMLAttributes<any> & BaseButtonProps>

export default React.memo(function Button(props: ButtonProps) {
  const {
    children,
    className,
    type,
    variant,
    fit,
    shape,
    size,
    ...rest
  } = props

  const classNames = cn(
    'btn',
    variant ? `btn-${variant}` : '',
    shape ? `btn-${shape}` : '',
    size ? `${size}` : '',
    fit ? 'btn-fit' : '',
    className
  )

  return (
    <button className={classNames} {...rest}>
      { children }
    </button>
  )
})