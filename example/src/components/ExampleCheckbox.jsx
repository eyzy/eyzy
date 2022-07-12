import React from 'react'
import { Checkbox, Field } from 'eyzy'
import Example from '../Example'

/* eslint-disable */
export default class CheckboxExamples extends React.Component {
  state = {
    checked: true
  }

  handleChange = (checked) => {
    this.setState({
      checked
    })
  }

  render() {
    return (
      <React.Fragment>
        <Example>
          <Checkbox useRing>Child Text</Checkbox>
        </Example>

        <Example label="Without FORM label">
          <Checkbox 
            onChange={this.handleChange} 
            checked={this.state.checked}>
              Checkbox Label
          </Checkbox>
        </Example>

        <Example label="Autofocus">
          <Checkbox autoFocus useRing />
        </Example>
      </React.Fragment>
    )
  }
}