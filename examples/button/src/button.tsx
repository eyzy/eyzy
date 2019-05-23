import React from 'react'
import Button from '../../../src/components/button'

export default class Component extends React.Component {
  render() {
    return (
      [
        <p>
          <Button type="submit" key="0">
            🌲
            Default
          </Button>
          <Button type="reset" variant="primary" key="1">
            🌲
            Primary
          </Button>
          <Button variant="warning" key="2">
            🌲
            Warning
          </Button>
          <Button variant="danger" key="3">
            🌲
            Danger
          </Button>
          <Button variant="success" key="4">
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
          <Button type="reset" variant="primary" key="1" disabled>
            🌲
            Primary
            🌲
          </Button>
          <Button variant="warning" key="2" disabled>
            🌲
            Warning
            🌲
          </Button>
          <Button variant="danger" key="3" disabled>
            🌲
            Danger
            🌲
          </Button>
          <Button variant="success" key="4" disabled>
            🌲
            Success
          </Button>
        </p>,
        <p>
          <Button fit>Fit container</Button>
        </p>,
        <p>
          <Button fit variant="primary">Fit container2</Button>
        </p>,
        <p>
          <Button variant="danger" shape="circle"><i className="fa fa-anchor"/></Button>
          <Button variant="primary" shape="extended">Extended button</Button>
        </p>,
        <p>
          <Button variant="danger" size="sm" shape="circle"><i className="fa fa-anchor"/></Button>
          <Button variant="primary" size="sm" shape="extended">Extended button</Button>
        </p>
          
      ]
    )
  }
}