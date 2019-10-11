import React from 'react'
import { Checkbox } from 'eyzy'

/* eslint-disable */
export default class CheckboxExamples extends React.Component {
  state = {
    checked: true
  }

  handleChange = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      [
        <p key="-1">
          <Checkbox checked={true} />&nbsp;
          <Checkbox />
        </p>,
        <p key="0">
          <Checkbox>
            Lalalal
          </Checkbox>
        </p>,
        <p key="1">
          <Checkbox align="right" defaultChecked={true}>
            Right
          </Checkbox>
        </p>,
        <p key="2">
          <Checkbox align="right" checked={this.state.checked} onChange={this.handleChange}>
            On Change
          </Checkbox>
        </p>,
      ]
    )
  }
}