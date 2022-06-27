import React from '../../node_modules/react'
import Example from '../Example'
import { NumberInput, Input, TextArea } from 'eyzy'

/* eslint-disable */
export default class InputExamples extends React.Component {
  state = {
    controlledValue0: '',
    controlledValue1: undefined,
    numberValue: 'ahahha'
  }

  handleChangeNumber = (value) => {
    if (value > 100) {
      return
    }
    console.log(value)
    this.setState({ numberValue: value })
  }

  handleChange0 = (value) => {
console.log(value)
    this.setState({ controlledValue0: value })
  }

  handleChange1 = (e) => {
    this.setState({ controlledValue1: e })
  }

  logEnterPress = (e) => {
    console.log('Enter is pressed', e)
  }

  logEscPress = (e) => {
    console.log('Esc is pressed', e)
  }

  render() {
    const helpText = (
      <ul>
        <li>Some item 1</li>
        <li>Some item 2</li>
        <li>Some item 3</li>
      </ul>
    )

    const autoHeightDefaultValue = `
      This
      is
      a
      big
      input
    `

    return (
      <React.Fragment>
        <Example>
          <Input
            label={'Label'}
            helpText={helpText}
            fit
          />
        </Example>
        <Example>
          <Input
            required
            label={<div><strong>A</strong>BC</div>}
            fit
          />
        </Example>
        <Example>
          <Input label="No label; Placeholder; Width: 350" placeholder="Ppppppppppppppppppplaceholder" width="350"/>
        </Example>
        <Example label="User onEsc and onEnter + autoFocus">
          <Input
            onPressEnter={this.logEnterPress}
            onPressEsc={this.logEscPress}
            defaultValue="DEFAULT_VALUE"
            required
          />
          <Input autoFocus placeholder="AutoFocus"/>
        </Example>
        <Example label="Value; Condtolled + Value">
          <Input value="AAAA" onChange={() => {}} error="Error TEXT"/>
          <Input defaultValue="Default Controlled" value={this.state.controlledValue1} onValueChange={this.handleChange1} />
          <Input value={this.state.controlledValue0} onChange={this.handleChange0} />
        </Example>
        <Example>
          <Input defaultValue="DEF_VAL" readOnly label="ReadOnly" />
          <Input defaultValue="DEF_VAL" disabled label="Disabled" />
        </Example>
        <Example>
          <TextArea helpText='Some description' label="TextArea label" />
        </Example>
        <Example>
          <TextArea label="TextArea FIT" fit />
        </Example>
        <Example label="Auto Height">
          <TextArea autoHeight fit defaultValue={autoHeightDefaultValue}/>
        </Example>
        <Example>
          <NumberInput label="Number UnCotrolled" required />
          <NumberInput label="Cotrolled (max 100)" value={this.state.numberValue} onValueChange={this.handleChangeNumber} />
        </Example>
      </React.Fragment>
    )
  }
}