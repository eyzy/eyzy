import React, { HTMLAttributes } from 'react'
import { cn } from '../../../common/classNames'

export interface BaseButtonGroupProps {
  size?: 'sm' | 'lg'
  className?: string
  fit?: boolean
}

export type ButtonGroupProps = Partial<HTMLAttributes<any> & BaseButtonGroupProps>

export default React.memo(function InputButton(props: ButtonGroupProps) {
  const {
    className,
    children,
    size,
    fit,
    ...rest
  } = props

  const classNames = cn(
    'input-group',
    size && `input-${size}`,
    fit && `input-group-fit`,
    className,
  )

  return (
    <div className={classNames} {...rest}>
      { children }
    </div>
  )
})