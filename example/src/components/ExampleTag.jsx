import React from 'react'
import { Tag } from 'eyzy'

/* eslint-disable */
export default class TagExample extends React.Component {
  state = {
    checked: true,
    tags: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  }

  handleChange = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  handleRemove = (removedTag) => {
    this.setState({
      tags: this.state.tags.filter(tag => tag !== removedTag)
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
          {this.state.tags.map(tag => (
            <Tag onRemove={() => this.handleRemove(tag)} key={tag} color="red" rounded>{tag}</Tag>
          ))}
        </p>,
        <p key="3">
          <Tag rounded tabIndex="1">Focusable: a</Tag>
          <Tag rounded tabIndex="2">Focusable: b</Tag>
          <Tag rounded tabIndex="3">Focusable: c</Tag>
        </p>,
      ]
    )
  }
}