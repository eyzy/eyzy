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
        <Button type="submit">
          🌲
          Primary
        </Button>,
        <Button type="submit">
          🌲
          Warning
        </Button>,
        <Button type="submit">
          🌲
          Danger
        </Button>
      ]
    )
  }
}