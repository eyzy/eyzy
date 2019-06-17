import React from 'react'
import Input from '../../../src/components/Input'
import InputGroup from '../../../src/components/Input/group'
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
        </p>,
        <p>
          <InputGroup>
            <Input/><Button>Atata</Button>
          </InputGroup>
        </p>,
        <p>
          <InputGroup>
            <Input shape="extended" size="sm" />
            <Input shape="extended" />
            <Button>AAAAAA</Button>
            <Input shape="extended" size="lg" />
          </InputGroup>
        </p>,
        <p>
          <InputGroup>
            <Input shape="extended" size="sm" intent="danger" />
            <Button appearance="danger">AAAAAA</Button>
          </InputGroup>
        </p>
      ]
    )
  }
}