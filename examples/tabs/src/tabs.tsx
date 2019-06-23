import React from 'react'
import Tabs, { Tab } from '../../../src/components/Tabs'

interface Props {
  name: string
}

class TabContent extends React.Component<Props> {
  componentDidMount() {
    console.log('Mounted: ' + this.props.name)
  }

  componentWillUnmount() {
    console.log('Unmounted: ' + this.props.name)
  }

  componentDidUpdate() {
    console.log('Updated: ' + this.props.name)
  }

  render() {
    return (
      <div>Tab content: {this.props.name}</div>
    )
  }
}

interface State {
  activeTabKey: string
}

export default class Component extends React.Component<null, State> {
  state = {
    activeTabKey: 'tab22'
  }

  handleTabChange = (key: string) => {
    if (key !== 'tab22') {
      this.setState({ activeTabKey: key })
    } 
  }

  render() {
    return (
      [
        <Tabs key="0">
          <Tabs.Tab label="Tab 1">Aaaaaaaa</Tabs.Tab>
          <Tabs.Tab label="Tab 2">Bbbbbbbb</Tabs.Tab>
          <Tabs.Tab label="Tab 3">Cccccccc</Tabs.Tab>
        </Tabs>,
        <Tabs key="1" onChange={this.handleTabChange} activeKey={this.state.activeTabKey}>
          <Tab label="Tab 11" key="tab11"><TabContent name="Tab 1111" /></Tab>
          <Tab label="Tab 22" key="tab22"><TabContent name="Tab 2222" /></Tab>
          <Tab label="Tab 33" key="tab33"><TabContent name="Tab 3333" /></Tab>
        </Tabs>,
        <Tabs key="2" >
          <Tab label="Tab 11" key="t"><TabContent name="Tab 1111" /></Tab>
          <Tab label="Tab 22" key="d"><TabContent name="Tab 2222" /></Tab>
          <Tab label="Tab 33" key="c"><TabContent name="Tab 3333" /></Tab>
        </Tabs>
      ]
    )
  }
}