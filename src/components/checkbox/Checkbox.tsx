import React, { InputHTMLAttributes, ChangeEvent } from 'react'
import { cn } from '../../common/classNames'

export interface BaseCheckboxProps {
  align: 'left' | 'right'
}

export type CheckboxProps = Partial<InputHTMLAttributes<any> & BaseCheckboxProps>

interface State {
  checked: boolean
}

export default class Checkbox extends React.Component<CheckboxProps, State> {
  constructor(props: CheckboxProps) {
    super(props)

    const checked: boolean | undefined = 'checked' in props 
      ? props.checked 
      : props.defaultChecked

    this.state = {
      checked: checked || false
    }
  }

  static getDerivedStateFromProps(props: CheckboxProps, state: State) {
    if ('checked' in props) {
      return {
        ...state,
        checked: props.checked,
      }
    }

    return null
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(e)
    } else {
      this.setState({ checked: e.target.checked })
    }
  }

  render() {
    const {
      className,
      children,
      align,
      defaultChecked,
      ...rest
    } = this.props
  
    const { checked } = this.state

    const classNames = cn(
      'eyzy-checkbox',
      'right' === align ? 'eyzy-checkbox--right' : null,
      checked ? 'checked' : null,
      className
    )

    return (
        <label className={classNames}>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={checked}
            {...rest}
          />
          <span className="eyzy-checkbox-inner" />
          {children && (
            <span className="eyzy-checkbox-label">{children}</span>
          )}
        </label>
    )
  }

}