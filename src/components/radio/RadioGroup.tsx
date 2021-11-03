import React, { useState } from 'react'
import { cn } from '../../common/classNames'

interface RadioOptions {
  label: string
  disabled?: boolean
  value?: any
}

export type RadioGroupProps = {
  options: RadioOptions[]
  name?: string
  value?: any
  onChange?: (key: string) => void
}

function getName(name?: string) {
  return name || '' + getName['_']++
}

function isChecked(o, val) {
  return o.value === val || o.label === val
}

getName._ = 0

export default function RadioGroup(props: RadioGroupProps) {
  const {options, name, value, onChange} = props
  const rName: string = getName(name)

  let selectedValue = value

  if (selectedValue === undefined && options[0]) {
    selectedValue = options[0].value || options[0].label
  }

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className={'eyzy-radio-group'}>
      {options.map((o: any, i: number) => (
        <label key={i} className={cn({active: isChecked(o, selectedValue)})}>
          <input 
            type="radio" 
            name={rName} 
            value={o.value || o.label} 
            disabled={o.disabled}
            checked={isChecked(o, selectedValue)}
            onChange={handleChange}
          />
          {o.label}
        </label>
      ))}
    </div>
  )
}