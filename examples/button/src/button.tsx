import React from 'react'
import Button from '../../../src/components/button'

export default class Component extends React.Component {
  render() {
    return (
      [
        <p>
          <Button type="submit" key="0">
            Default
          </Button>
          <Button type="reset" intent="primary" key="1">
            🌲
            Primary
          </Button>
          <Button intent="warning" key="2">
            🌲
            Warning
          </Button>
          <Button intent="danger" key="3">
            🌲
            Danger
          </Button>
          <Button intent="success" key="4">
            🌲
            Success
          </Button>
        </p>,
        <p>
          <Button appearance="minimal" type="submit" key="0">
            🌲
            Default
          </Button>
          <Button appearance="minimal" type="reset" intent="primary" key="1">
            🌲
            Primary
          </Button>
          <Button appearance="minimal" intent="warning" key="2">
            🌲
            Warning
          </Button>
          <Button appearance="minimal" intent="danger" key="3">
            🌲
            Danger
          </Button>
          <Button appearance="minimal" intent="success" key="4">
            🌲
            Success
          </Button>
        </p>,
        <p>
          <Button appearance="outlined" type="submit" key="0">
            🌲
            Default
          </Button>
          <Button appearance="outlined" type="reset" intent="primary" key="1">
            🌲
            Primary
          </Button>
          <Button appearance="outlined" intent="warning" key="2">
            🌲
            Warning
          </Button>
          <Button appearance="outlined" intent="danger" key="3">
            🌲
            Danger
          </Button>
          <Button appearance="outlined" intent="success" key="4">
            🌲
            Success
          </Button>
        </p>,
        <p>
          <Button type="submit" key="0" disabled>
            🌲
            Default
            🌲
          </Button>
          <Button type="reset" intent="primary" key="1" disabled>
            🌲
            Primary
            🌲
          </Button>
          <Button intent="warning" key="2" disabled>
            🌲
            Warning
            🌲
          </Button>
          <Button intent="danger" key="3" disabled>
            🌲
            Danger
            🌲
          </Button>
          <Button intent="success" key="4" disabled>
            🌲
            Success
          </Button>
        </p>,
        <p>
          <Button fit>Fit container</Button>
        </p>,
        <p>
          <Button fit intent="primary">Fit container2</Button>
        </p>,
        <p>
          <Button shape="circle"><i className="fa fa-plus"/></Button>
          <Button intent="danger" shape="circle"><i className="fa fa-trash"/></Button>
          <Button intent="primary" shape="extended">Extended button</Button>
          <Button intent="warning" shape="rect">Rectangle button</Button>
        </p>,
        <p>
          <Button intent="danger" type="submit" key="0" size="sm">
            🌲
            Small
            🌲
          </Button>
          <Button intent="danger" type="reset" key="1">
            🌲
            Default
            🌲
          </Button>
          <Button intent="danger" key="2" size="lg">
            🌲
            Big
            🌲
          </Button>
        </p>
      ]
    )
  }
}