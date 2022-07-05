import React from '../../node_modules/react'
import Example from '../Example'
import { NumberInput, Input, TextArea, Field } from 'eyzy'

const getRenderer = (type, props) => {
  if (type === 'text') {
    return React.createElement(Input, props)
  } else if (type === 'area') {
    return TextArea
  }

  return React.createElement(NumberInput, props)
}

const RenderComponent = React.memo(({ type, value, name, onChange }) => {
  return getRenderer(type, { value, name, onChange, fit: true })
})

/* eslint-disable */
export default class InputExamples extends React.Component {
  state = {
    controlledValue0: '',
    controlledValue1: undefined,
    numberValue: 'ahahha',
    valuedKeys: {}
  }

  handleChangeKey = (key) => value => this.setState({
    valuedKeys: {
      ...this.state.valuedKeys,
      [key]: value
    }
  })

  handleChangeNumber = (value) => {
    if (value > 100) {
      return
    }

    this.setState({ numberValue: value })
  }

  handleChange0 = (value) => {
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

  reset = () => {
    this.setState({valuedKeys: {}})
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
        <Example><button onClick={this.reset}>Reset</button></Example>

        <Example label="As a Component (Controlled)">
          <RenderComponent type="text" value={this.state.valuedKeys['a'] || ''} onChange={this.handleChangeKey('a')} />
        </Example>

        <Example label="Fit; Uncontrolled">
          <Input fit />
        </Example>
        <Example label="Value was undefined; Controlled">
          <Input required width="350" value={this.state.valuedKeys.b || ''} onChange={this.handleChangeKey('b')}/>
        </Example>

        <Example label="User onEsc and onEnter + Default value; Uncontrolled">
          <Input
            onPressEnter={this.logEnterPress}
            onPressEsc={this.logEscPress}
            defaultValue="DEFAULT_VALUE"
          />
        </Example>

        <Example label="Default value; With value; Controlled; Blur">
          <Input
            defaultValue="DEFAULT_VALUE"
            onBlur={(e) => console.log(`Blur: ${e.target.value}`)}
            onChange={(value) => console.log(`Change: ${value}`)}
          />
        </Example>

        <Example label="AutoFocus">
          <Input autoFocus placeholder="AutoFocus" fit/>
        </Example>

        <Example>
          <Input value="READ_ONLY" readOnly/>
        </Example>
        <Example>
          <Input value="DISABLED" disabled/>
        </Example>

        <Example>
          <Field
            label={"With field"}
            required
            component={<Input />}
          />
        </Example>

        <Example  label="TextArea label">
          <TextArea value={this.state.valuedKeys.d || ''} placeholder="LALALLA" onChange={this.handleChangeKey('d')}/>
        </Example>
        <Example>
          <TextArea label="TextArea FIT" fit />
        </Example>
        <Example label="Auto Height">
          <TextArea autoHeight fit defaultValue={autoHeightDefaultValue}/>
        </Example>

        <Example label="Number UnCotrolled + DEFAULT_VALUE">
          <NumberInput label="Number UnCotrolled" defaultValue="300" />
        </Example>
        <Example label="Number UnCotrolled">
          <NumberInput label="Number UnCotrolled" value="300" />
        </Example>
        <Example label="Number Cotrolled">
          <NumberInput value={this.state.valuedKeys.e || ''} onChange={this.handleChangeKey('e')} />
        </Example>
        <Example label="Number Cotrolled (As Component)">
          <RenderComponent type="number" value={this.state.valuedKeys.f || ''} onChange={this.handleChangeKey('f')} />
        </Example>
        {/**
        <Example>
          <Input label="No label; Placeholder; Width: 350" error="And error..." placeholder="Ppppppppppppppppppplaceholder" width="350"/>
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
          <Input defaultValue="Default Controlled" value={this.state.controlledValue1} onChange={this.handleChange1} />
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
          <NumberInput label="Cotrolled (max 100)" value={this.state.numberValue} onChange={this.handleChangeNumber} />
        </Example>
         */}
      </React.Fragment>
    )
  }
}