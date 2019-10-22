import React from 'react'
import { Tag } from 'eyzy'

/* eslint-disable */
export default class TagExample extends React.Component {
  state = {
    checked: true
  }

  handleChange = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      [
        <p key="0">
          <Tag>aaaaaaaaa</Tag>
          <Tag>bbbbbbbb</Tag>
          <Tag>ccccccc</Tag>
        </p>,
        <p key="1">
          <Tag rounded>aaaaaaaaa</Tag>
          <Tag rounded>bbbbbbbb</Tag>
          <Tag rounded>ccccccc</Tag>
        </p>,
        <p key="2">
          <Tag onRemove={() => {}} key="a">aaaaaaaaa</Tag>
          <Tag onRemove={() => {}} key="b">bbbbbbbb</Tag>
          <Tag onRemove={() => {}} key="c">ccccccc</Tag>
        </p>,
      ]
    )
  }
}