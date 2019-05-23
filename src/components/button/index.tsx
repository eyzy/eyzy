import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

import './style.scss'

export interface BaseButtonProps {
  variant?: string
}

export type ButtonProps = Partial<AnchorHTMLAttributes<any> & ButtonHTMLAttributes<any> & BaseButtonProps>

export default React.memo(function Button(props: ButtonProps) {
  const {
    children,
    className,
    type,
    variant,
    ...rest
  } = props

  const classNames = cn(
    'btn',
    variant ? `btn-${variant}` : '',
    className
  )

  return (
    <button className={classNames} {...rest}>
      { children }
    </button>
  )
})