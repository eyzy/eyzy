import React, { HTMLAttributes } from 'react'
import { cn } from '../../../common/classNames'

export interface BaseButtonGroupProps {
  size?: 'sm' | 'lg'
  className?: string
  fit?: boolean
}

export type ButtonGroupProps = Partial<HTMLAttributes<any> & BaseButtonGroupProps>

export default React.memo(function ButtonGroup(props: ButtonGroupProps) {
  const {
    className,
    children,
    size,
    fit,
    ...rest
  } = props

  const classNames = cn(
    'eyzy-btn-group',
    size && `eyzy-btn-${size}`,
    fit && `eyzy-btn-group-fit`,
    className,
  )

  return (
    <div className={classNames} {...rest}>
      { children }
    </div>
  )
})