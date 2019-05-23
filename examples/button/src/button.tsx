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
        </p>
      ]
    )
  }
}