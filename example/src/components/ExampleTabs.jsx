import React from 'react'
import { Tabs } from 'eyzy/es/eyzy'

const Tab = Tabs.Tab

class TabContent extends React.Component {
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

export default class Component extends React.Component {
  state = {
    activeTabKey: 'tab22'
  }

  handleTabChange = (key) => {
    if (key !== 'tab22') {
      this.setState({ activeTabKey: key })
    } 
  }

  render() {
    return (
      [
        <Tabs key="0">
          <Tabs.Tab label="Tab 1" key={"a"}>Aaaaaaaa</Tabs.Tab>
          <Tabs.Tab label="Tab 2" key={"b"}>Bbbbbbbb</Tabs.Tab>
          <Tabs.Tab label="Tab 3" key={"c"}>Cccccccc</Tabs.Tab>
        </Tabs>,
        <Tabs key="1" onChange={this.handleTabChange} activeKey={this.state.activeTabKey}>
          <Tab label="Tab 11" key="tab11"><TabContent name="Tab 1111" /></Tab>
          <Tab label="Tab 22" key="tab22"><TabContent name="Tab 2222" /></Tab>
          <Tab label="Tab 33" key="tab33"><TabContent name="Tab 3333" /></Tab>
        </Tabs>,
        <Tabs key="2" defaultActiveKey={"c"} className="shadow">
          <Tab label="Tab 11" key="t"><TabContent name="Tab 1111" /></Tab>
          <Tab label="Tab 22" key="d"><TabContent name="Tab 2222" /></Tab>
          <Tab label="Tab 33" key="c"><TabContent name="Tab 3333 DEFAULT ACTIVE KEY" /></Tab>
        </Tabs>,
        <Tabs key="3">
          <Tabs.Tab label="Tab 111" key="tab1">Default with existed key</Tabs.Tab>
        </Tabs>,
        <Tabs key="4">
          <Tabs.Tab label="Tab 3333">Default without existed key</Tabs.Tab>
        </Tabs>,
        <Tabs key="5">
          <Tabs.Tab label={<strong>Tab with HTML 1</strong>} key={"a"}>Aaaaaaaa</Tabs.Tab>
          <Tabs.Tab headerClassName="red-color" label={<strong>Tab with HTML 2</strong>} key={"b"}>Bbbbbbbb<br />bbbbb</Tabs.Tab>
        </Tabs>,
        <Tabs key="6" defaultActiveKey={'b'}>
          <Tabs.Tab label="Item 10">Scrollable header 1</Tabs.Tab>
          <Tabs.Tab label="Item 11">Scrollable header 2</Tabs.Tab>
          <Tabs.Tab label="Item 12">Scrollable header 3</Tabs.Tab>
          <Tabs.Tab label="Item 13">Scrollable header 4</Tabs.Tab>
          <Tabs.Tab label="Item 14 ____ Long">Scrollable header 5</Tabs.Tab>
          <Tabs.Tab label="Item 15">Scrollable header 6</Tabs.Tab>
          <Tabs.Tab label="Item 16" key='b'>Scrollable header 7</Tabs.Tab>
          <Tabs.Tab label="Item 17">Scrollable header 8</Tabs.Tab>
        </Tabs>,
        <Tabs>
          <Tabs.Tab label="Уроки по абонементам"/>
          <Tabs.Tab label="Поурочно"/>
          <Tabs.Tab label="Групповой урок"/>
        </Tabs>
      ]
    )
  }
}