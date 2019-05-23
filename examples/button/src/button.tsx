import React from 'react'
import Button from '../../../src/components/button'

export default class Component extends React.Component {
  render() {
    return (
      [
        <Button type="submit">
          🌲
          Default
        </Button>,
        <Button type="reset" variant="primary">
          🌲
          Primary
        </Button>,
        <Button variant="warning">
          🌲
          Warning
        </Button>,
        <Button variant="danger">
          🌲
          Danger
        </Button>
      ]
    )
  }
}