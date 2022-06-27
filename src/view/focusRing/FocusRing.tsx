import React from 'react'
import { useFocusRing } from './useFocusRing'
import { cn } from '../../common/classNames'

export default function FocusRing(props: any) {
  const {children, ...rest} = props
  const child = React.Children.only(children)
  const isFocused = useFocusRing(rest.id, child.props.autoFocus)
  
  const childProps = {
    ...rest,
    ...child.props,
    className: cn(
      child.props.className, 
      {
        'e-ring': isFocused
      }
    )
  }

  return React.cloneElement(child, childProps);
}