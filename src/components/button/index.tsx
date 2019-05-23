import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import './style.scss'

export type ButtonProps = Partial<AnchorHTMLAttributes<any> & ButtonHTMLAttributes<any>>

export default React.memo(function Button(props: ButtonProps) {
  const {
    children,
    ...rest
  } = props

  return (
    <button className="btn" {...rest}>
      { children }
    </button>
  )
})