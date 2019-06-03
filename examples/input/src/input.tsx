import React from 'react'
import Input from '../../../src/components/Input'
import Button from '../../../src/components/Button'


export default class Component extends React.Component {
  render() {
    return (
      [
        <p>
          <Input placeholder="aaaaaaaaaaaaaaa" /> 
          <Input value="atatat" />
        </p>,
        <p>
          <Input fit />
        </p>,
        <p>
          <Input shape="extended" />
          <Input shape="rect" />
        </p>,
        <p>
          <Input shape="extended" size="sm" />
          <Input shape="extended" />
          <Input shape="extended" size="lg" />
        </p>,
        <p>
          <Input shape="rect" disabled size="sm" />
          <Input shape="rect" disabled />
          <Input shape="rect" disabled size="lg" />
        </p>,
        <p>
          <Input width="600" />
          <Input width="127px" />
        </p>,
        <p>
          <Input />
          <Input intent="primary" width="150px" />
          <Input intent="danger" width="150px" />
          <Input intent="warning" width="150px" />
          <Input intent="success" width="150px" />
        </p>,
        <p>
          <Input/><Button>Atata</Button>
        </p>
      ]
    )
  }
}