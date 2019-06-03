import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

export interface BaseInputProps {
  intent?: 'primary' | 'warning' | 'success' | 'danger'
  fit?: boolean
  shape?: 'extended' | 'rect',
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
  console.log('rename size  everywere (!)')

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
    'input',
    intent && `input-${intent}`,
    shape && `input-${shape}`,
    size && `input-${size}`,
    fit && 'input-fit',
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