import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

export interface BaseInputProps {
  intent?: 'primary' | 'warning' | 'success' | 'danger' | string
  fit?: boolean
  shape?: 'extended' | 'rect' | string,
  size?: 'sm' | 'lg',
  width?: number | string
}

export type InputProps = Partial<InputHTMLAttributes<any> & BaseInputProps>

function parseWidth(width: any): string | null {
  const parsed = parseInt(width, 10)

  if (!isNaN(parsed)) {
    return `${parsed}px`
  }

  return null
}

export default React.memo(function Input(props: InputProps) {
  const {
    className,
    intent,
    shape,
    width,
    size,
    type,
    fit,
    ...rest
  } = props

  const classNames = cn(
    'eyzy-input',
    intent && `eyzy-input-${intent}`,
    shape && `eyzy-input-${shape}`,
    size && `eyzy-input-${size}`,
    fit && 'eyzy-input-fit',
    className
  )

  const parsedWidth = parseWidth(width)
  const style = !parsedWidth 
    ? undefined
    : {
      width: parsedWidth
  }

  return (
    <input 
      className={classNames} 
      type={type || "text"}
      style={style}
      {...rest} 
    />
  )
})