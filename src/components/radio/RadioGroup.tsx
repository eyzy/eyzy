import React from 'react'
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

export default class RadioGroup extends React.PureComponent<RadioGroupProps> {
  parentEl: any = React.createRef()

  handleChange = (e: any) => {
    const onChange = this.props.onChange
    const target = e.target

    onChange && onChange(target.value)

    try {
      const bounds = target.parentNode.getBoundingClientRect()
      const parentEl = this.parentEl.current

      const groupWrap = parentEl.parentNode
      const groupWrapWidth = groupWrap.clientWidth
      const groupWrapBounds = groupWrap.getBoundingClientRect()

      const [labelLeft, labelRight] = [
        bounds.left - groupWrapBounds.left,
        bounds.right - groupWrapBounds.left
      ]

      if (labelRight > groupWrapWidth) {
        groupWrap.scrollLeft += labelRight - groupWrapWidth + 25
      } else if (labelLeft < 0) {
        groupWrap.scrollLeft += (labelLeft - 25)
      }
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    const {options, name, value} = this.props
    const rName: string = getName(name)
  
    let selectedValue = value
  
    if (selectedValue === undefined && options[0]) {
      selectedValue = options[0].value || options[0].label
    }

    return (
      <div className={'eyzy-radio-group'} ref={this.parentEl}>
        {options.map((o: any, i: number) => (
          <label key={i} className={cn({active: isChecked(o, selectedValue)})}>
            <input 
              type="radio" 
              name={rName} 
              value={o.value || o.label} 
              disabled={o.disabled}
              checked={isChecked(o, selectedValue)}
              onChange={this.handleChange}
            />
            {o.label}
          </label>
        ))}
      </div>
    )
  }
}
