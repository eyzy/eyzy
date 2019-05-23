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
        <Button type="reset">
          🌲
          Primary
        </Button>,
        <Button>
          🌲
          Warning
        </Button>,
        <Button>
          🌲
          Danger
        </Button>
      ]
    )
  }
}