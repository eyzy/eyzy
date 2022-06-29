import React, { forwardRef, Ref, useState, useMemo } from 'react'
import { BaseCheckboxProps } from './types/BaseCheckboxProps'
import Field from '../../view/field/Field'
import { uid } from '../../common/uid'

function Checkbox(props: BaseCheckboxProps, ref: Ref<any>) {
  const {
    className,
    width,
    required,
    error,
    helpText,
    label,
    onChange,
    children,
    ...rest
  } = props

  const id = useMemo(() => `e-${uid()}`, [])
  const [checked, setChecked] = useState<boolean>(
    'checked' in props 
      ? !!props.checked 
      : !!props.defaultChecked
  )

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  const Component = (
    <input
      type="checkbox"
      onChange={handleChange}
      checked={checked}
      id={id}
      {...rest}
    />
  )

  return (
    <Field
      label={label} 
      ctrlClassName='e-checkbox'
      helpText={helpText} 
      required={required} 
      error={error} 
      component={Component} 
    >
      <span className="e-outer">
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
    </Field>
  )
}

export default forwardRef(Checkbox)