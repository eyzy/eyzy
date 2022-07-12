import React, { forwardRef, Ref, useState, useMemo, useEffect } from 'react'
import { useFocusRing } from '../../view/focusRing/useFocusRing'
import { BaseCheckboxProps } from './types/BaseCheckboxProps'
import { uid } from '../../common/uid'
import { cn } from 'src/common/classNames'

function Checkbox(props: BaseCheckboxProps, ref: Ref<any>) {
  const {
    className,
    width,
    required,
    error,
    helpText,
    label,
    autoFocus,
    children,
    defaultChecked,
    useRing,
    onChange,
    ...rest
  } = props

  const id = useMemo(() => `e-${uid()}`, [])
  const [checked, setChecked] = useState<boolean>(
    'checked' in props 
      ? !!props.checked 
      : !!props.defaultChecked
  )

  const isFocused = useFocusRing(id, !!autoFocus)
  const classNames = cn(
    'e-checkbox',
    className
  )

  const eOuterClassName = cn(
    'e-outer',
    {
      'e-ring': useRing && isFocused
    }
  )

  const handleChange = (e) => {
    setChecked(e.target.checked)

    if (onChange) {
      onChange(e.target.checked)
    }
  }

  useEffect(() => {
    if (props.checked === undefined) {
      setChecked(!!props.defaultChecked)
    } else (
      setChecked(props.checked)
    )
  }, [props.checked, props.defaultChecked])

  return (
    <div className={classNames}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        id={id}
        autoFocus={autoFocus}
        ref={ref}
        {...rest}
      />

      <span className={eOuterClassName}>
        <span className="e-inner">
          {checked && (
            <svg focusable="false" role="img">
              <path d="M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1 1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712 6A.999.999 0 0 1 3.788 9z"></path>
            </svg>
          )}
        </span>
      </span>

      {children && (
        <span className='e-checkbox-label'>{children}</span>
      )}
    </div>
  )
}

export default forwardRef(Checkbox)