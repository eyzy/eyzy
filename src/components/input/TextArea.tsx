import React, { useRef, useEffect } from 'react'
import { cn } from '../../common/classNames'
import BaseInput from './BaseInput'
import { TextAreaProps } from './types/TextAreaProps'

export default React.memo(function TextArea(props: TextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement | undefined>()
  const {autoHeight, className, ...rest} = props
  const classNames = cn(
    'e-textarea',
    {
      'auto-height': autoHeight
    },
    className
  )

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current?.scrollHeight + 5}px`
    }
  }

  useEffect(() => {
    if (textAreaRef.current && autoHeight) {
      textAreaRef.current.addEventListener('input', handleInput, false)
      handleInput()
    }

    return () => {
      textAreaRef.current && textAreaRef.current.removeEventListener('input', handleInput, false)
    }
  }, [autoHeight])

  return (
    <BaseInput 
      {...rest} 
      className={classNames}
      ref={textAreaRef}
      type="textarea"
    />
  )
})
