import React from 'react'
import Example from '../Example'
import { Button } from 'eyzy'

const ButtonGroup = Button.Group

/* eslint-disable */
export default class ButtonExamples extends React.Component {
  render() {

    return (
      <React.Fragment>
        <Example label="Primary">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button>Default</Button>
          <Button variant="minimal">Minimal</Button>
        </Example>
        
      </React.Fragment>
    )

    return (
      [
        <p key="0">
          <Button type="submit">Default</Button>
          <Button type="reset" intent="primary">🌲 Primary</Button>
          <Button intent="warning">🌲 Warning</Button>
          <Button intent="danger">🌲 Danger</Button>
          <Button intent="success">🌲 Success</Button>
        </p>,
        <p key="1">
          <Button appearance="minimal" type="submit">🌲Default</Button>
          <Button appearance="minimal" type="reset" intent="primary">🌲  Primary</Button>
          <Button appearance="minimal" intent="warning">🌲  Warning</Button>
          <Button appearance="minimal" intent="danger">🌲  Danger</Button>
          <Button appearance="minimal" intent="success">🌲  Success</Button>
        </p>,
        <p key="2">
          <Button appearance="outlined" type="submit">🌲 Default</Button>
          <Button appearance="outlined" type="reset" intent="primary">🌲 Primary</Button>
          <Button appearance="outlined" intent="warning">🌲 Warning</Button>
          <Button appearance="outlined" intent="danger">🌲 Danger</Button>
          <Button appearance="outlined" intent="success">🌲 Success</Button>
        </p>,
        <p key="3">
          <Button type="submit" disabled>🌲 Default 🌲</Button>
          <Button type="reset" intent="primary" disabled>🌲 Primary 🌲</Button>
          <Button intent="warning" disabled>🌲 Warning 🌲</Button>
          <Button intent="danger" disabled>🌲 Danger 🌲</Button>
          <Button intent="success" disabled>🌲 Success </Button>
        </p>,
        <p key="4">
          <Button fit>Fit container</Button>
        </p>,
        <p key="5">
          <Button fit intent="primary">Fit container2</Button>
        </p>,
        <p key="6">
          <Button shape="circle"><i className="fa fa-plus"/></Button>
          <Button intent="danger" shape="circle"><i className="fa fa-trash"/></Button>
          <Button intent="primary" shape="extended">Extended button</Button>
          <Button intent="warning" shape="rect">Rectangle button</Button>
        </p>,
        <p key="7">
          <Button intent="danger" shape="extended" type="submit" size="sm">🌲 Small 🌲</Button>
          <Button intent="danger" shape="extended" type="reset">🌲 Default 🌲</Button>
          <Button intent="danger" shape="extended" size="lg">🌲 Big 🌲</Button>
          <Button intent="success" shape="rect" type="submit" size="sm">🌲 Small 🌲</Button>
          <Button intent="success" shape="rect" type="reset">🌲 Default 🌲</Button>
          <Button intent="success" shape="rect" size="lg">🌲 Big 🌲</Button>
        </p>,
        <p className="active-example" key="8">
          <Button type="submit">Default</Button>
          <Button active type="submit">Active</Button>

          <Button type="reset" intent="primary">Primary</Button>
          <Button active type="reset" intent="primary">🌲Active</Button>
          
          <Button intent="warning">Warning</Button>
          <Button active intent="warning">🌲Active</Button>
          
          <Button intent="danger">Danger</Button>
          <Button active intent="danger">🌲Active</Button>
          
          <Button intent="success">Success</Button>
          <Button active intent="success">🌲Active</Button>
        </p>,
        <ButtonGroup key="9">
          <Button active type="submit">Default</Button>
          <Button type="submit">Default</Button>
          <Button type="submit">Default</Button>
        </ButtonGroup>,
        <ButtonGroup key="10">
          <Button intent="success" type="submit">Success</Button>
          <Button type="submit">Default</Button>
          <Button intent="danger" type="submit">Danger</Button>
        </ButtonGroup>,
        <ButtonGroup key="11" fit>
          <Button intent="primary">Item 1</Button>
          <Button active intent="primary">Item 2</Button>
          <Button intent="primary">Item 3</Button>
          <Button intent="primary">Item 4</Button>
        </ButtonGroup>,
        <ButtonGroup key="12" fit>
          <Button intent="warning">Item 1</Button>
          <Button active intent="warning">Item 2</Button>
          <Button intent="warning">Item 3</Button>
          <Button intent="warning">Item 4</Button>
        </ButtonGroup>,
        <p key="13">
          <Button appearance="bordered" type="submit">Default</Button>
          <Button appearance="bordered" type="reset" intent="primary">🌲 Primary</Button>
          <Button appearance="bordered" intent="warning">🌲 Warning</Button>
          <Button appearance="bordered" intent="danger">🌲 Danger</Button>
          <Button appearance="bordered" intent="success">🌲 Success</Button>
          <Button appearance="bordered" intent="danger" shape="extended" type="submit" size="sm">🌲 Small 🌲</Button>
          <Button appearance="bordered" intent="danger" shape="extended" type="reset">🌲 Default 🌲</Button>
          <Button appearance="bordered" intent="danger" shape="extended" size="lg">🌲 Big 🌲</Button>
        </p>,
      ]
    )
  }
}