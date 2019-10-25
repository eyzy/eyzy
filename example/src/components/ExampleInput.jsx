import React from 'react'
import { Button, Input } from 'eyzy'

const InputGroup = Input.Group

/* eslint-disable */
export default class InputExamples extends React.Component {
  state = {
    controlledValue0: '',
    controlledValue1: undefined
  }

  handleChange0 = (e) => {
    this.setState({ controlledValue0: e.target.value })
  }

  handleChange1 = (e) => {
    this.setState({ controlledValue1: e.target.value })
  }

  logEnterPress = (e) => {
    console.log('Enter is pressed', e)
  }

  logEscPress = (e) => {
    console.log('Esc is pressed', e)
  }

  render() {
    return (
      [
        <p key="0">
          <Input placeholder="Placeholder" />
          <Input value="atatat" onChange={_ => {}} />
          <Input defaultValue="Default" />
          <Input defaultValue="Default Controlled" value={this.state.controlledValue1} onChange={this.handleChange1} />
          <Input placeholder="Controlled" value={this.state.controlledValue0} onChange={this.handleChange0} />
        </p>,
        <p key="1">
          <Input placeholder="Enter events" onPressEnter={this.logEnterPress} autoFocus />
          <Input placeholder="Esc events" onPressEsc={this.logEscPress} />
        </p>,
        <p key="2">
          <Input fit style={{background: '#1d00e317', color: '#001'}} placeholder="With Style attr" />
        </p>,
        <p key="3">
          <Input shape="extended" />
          <Input shape="rect" />
        </p>,
        <p key="4">
          <Input shape="extended" size="sm" />
          <Input shape="extended" />
          <Input shape="extended" size="lg" />
        </p>,
        <p key="5">
          <Input shape="rect" disabled size="sm" />
          <Input shape="rect" disabled />
          <Input shape="rect" disabled size="lg" />
        </p>,
        <p key="6">
          <Input width="600" />
          <Input width="127px" />
        </p>,
        <p key="7">
          <Input />
          <Input intent="primary" width="150px" />
          <Input intent="danger" width="150px" />
          <Input intent="warning" width="150px" />
          <Input intent="success" width="150px" />
        </p>,
        <p key="8">
          <Input/><Button>Atata</Button>
        </p>,
        <div key="9" className="add-margin">
          <InputGroup>
            <Input/><Button>Atata</Button>
          </InputGroup>
        </div>,
        <div key="10" className="add-margin">
          <InputGroup>
            <Input shape="extended" size="sm" />
            <Input shape="extended" />
            <Button>AAAAAA</Button>
            <Input shape="extended" size="lg" />
          </InputGroup>
        </div>,
        <div key="11" className="add-margin">
          <InputGroup>
            <Input shape="extended" size="sm" intent="danger" />
            <Button appearance="danger">AAAAAA</Button>
          </InputGroup>
        </div>
      ]
    )
  }
}