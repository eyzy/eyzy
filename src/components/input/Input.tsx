import React, { InputHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

export interface BaseInputProps {
  intent?: 'primary' | 'warning' | 'success' | 'danger' | string
  fit?: boolean
  shape?: 'extended' | 'rect' | string,
  size?: 'sm' | 'lg',
  width?: number | string
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  onPressEsc?: React.KeyboardEventHandler<HTMLInputElement>
}

export type InputProps = Partial<Omit<InputHTMLAttributes<any>, 'size'> & BaseInputProps>

function parseWidth(width: any): string | null {
  const parsed = parseInt(width, 10)

  if (!isNaN(parsed)) {
    return `${parsed}px`
  }

  return null
}

export default class Input extends React.Component<InputProps> {
  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onPressEnter, onPressEsc, onKeyDown } = this.props

    if (onPressEnter && 13 === e.keyCode) {
      onPressEnter(e)
    }

    if (onPressEsc && 27 === e.keyCode) {
      onPressEsc(e)
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  render() {
    const {
      className,
      intent,
      shape,
      width,
      size,
      type,
      fit,
      style,
      onPressEnter,
      onPressEsc,
      ...rest
    } = this.props
  
    const classNames = cn(
      'eyzy-input',
      intent && `eyzy-input-${intent}`,
      shape && `eyzy-input-${shape}`,
      size && `eyzy-input-${size}`,
      fit && 'eyzy-input-fit',
      className
    )
  
    const parsedWidth = parseWidth(width)
    const elemStyle = style || {}

    if (parsedWidth) {
      elemStyle.width = parsedWidth
    }
  
    return (
      <input 
        {...rest} 
        className={classNames} 
        type={type || "text"}
        style={elemStyle}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}