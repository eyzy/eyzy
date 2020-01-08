import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '../../common/classNames'

export interface BaseSwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  size?: 'sm' | 'lg',
  onChange?: (isChecked: boolean) => void
}

export type SwitchProps = Partial<ButtonHTMLAttributes<any> & BaseSwitchProps>

interface State {
  checked: boolean
}

export default class Switch extends React.PureComponent<SwitchProps, State> {
  constructor(props: SwitchProps) {
    super(props)

    const checked: boolean | undefined = 'checked' in props 
      ? props.checked 
      : props.defaultChecked

    this.state = {
      checked: checked || false
    }
  }

  static getDerivedStateFromProps(props: SwitchProps, state: State) {
    if ('checked' in props) {
      return {
        ...state,
        checked: props.checked,
      }
    }

    return null
  }

  handleClick = () => {
    if (this.props.onChange) {
      this.props.onChange(!this.state.checked)
    }

    if (!('checked' in this.props)) {
      this.setState({ checked:!this.state.checked })
    }
  }

  render() {
    const {
      size, children
    } = this.props

    const classNames: string = cn(
      'eyzy-switch',
      size && `eyzy-switch-${size}`
    )

    const button = <button className={classNames} onClick={this.handleClick} aria-checked={this.state.checked}/>

    if (children) {
      return (
        <span className="eyzy-switch-container">
          {button} 
          <span className="eyzy-switch-text" onClick={this.handleClick}>{children}</span>
        </span>
      )
    }

    return button
  }
}