import React from 'react'
import { Checkbox } from 'eyzy'
import Example from '../Example'

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
      <React.Fragment>
        <Example>
          <Checkbox label="Form Label">Child Text</Checkbox>
        </Example>

        <Example label="Without FORM label">
          <Checkbox>Checkbox Label</Checkbox>
        </Example>

        <Example label="Autofocus">
          <Checkbox autoFocus />
        </Example>
      </React.Fragment>
    )
  }
}