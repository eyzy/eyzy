import React from 'react'
import { Switch } from 'eyzy'

/* eslint-disable */
export default class SwitchExample extends React.Component {
  state = {
    checked: true,
  }

  change = (checked) => {
    this.setState({ checked })
  }

  log = (isChecked) => {
    console.log(`switch to ${isChecked}`)
  }

  render() {
    return (
      [
        <p key="0">
          <Switch defaultChecked={true} />&nbsp;
          <Switch defaultChecked={false} />&nbsp;
          <Switch checked={this.state.checked} onChange={this.change} />
        </p>,
        
        <p key="1">
          <Switch checked={true} onChange={this.log} />&nbsp;
          <Switch checked={false} onChange={this.log} />&nbsp;
          <Switch onChange={this.log} />&nbsp;
        </p>,
        
        <p key="2">
          <Switch defaultChecked={true} onChange={this.log}>Some content</Switch>
        </p>,
        
        <p key="3">
          <Switch defaultChecked={true} onChange={this.log} size="sm">Some content</Switch>
        </p>,
      ]
    )
  }
}