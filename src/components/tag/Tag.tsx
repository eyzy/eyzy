import React from 'react'
import { cn } from '../../common/classNames'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  removable?: boolean
  rounded?: boolean
  color?: string
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void
  key?: string
}

export default React.memo(function Tag(props: TagProps) {
  const {
    color,
    rounded,
    onRemove,
    children,
    ...rest
  } = props

  const className = cn(
    'tag',
    rounded ? 'tag--rounded' : null
  )

  return (
    <span className={className} {...rest}>
      {children}

      {onRemove && (
        <button className="tag__remove-btn" onClick={onRemove}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fill-rule="evenodd">
            </path>
          </svg>  
        </button>
      )}
    </span>
  )
})
