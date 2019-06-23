import React, { ReactText } from 'react'
import Tab, { TabProps } from './Tab'

export interface TabsProps {
  children: React.ReactElement<TabProps>[]
  activeKey?: ReactText
  onChange?: (activeKey: ReactText) => void
}

interface TabsState {
  activeKey?: ReactText
}

const isTab = (component: any): boolean => {
  return component && component.type === Tab
}

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
  static Tab = Tab

  constructor(props: TabsProps) {
    super(props)

    this.state = {
      activeKey: props.activeKey || props.children[0].key || 0
    }
  }

  static getDerivedStateFromProps(props: TabsProps) {
    if (props.activeKey) {
      return {
        activeKey: props.activeKey
      }
    }

    return null
  }

  getActiveContent = (): React.ReactElement<TabProps> | null => {
    const children = this.props.children
    const activeKey = this.state.activeKey

    let activeContent: React.ReactElement<TabProps> | null = null

    React.Children.forEach(children, (child: React.ReactElement<TabProps>, i: number) => {
      if (child.key === activeKey || i === activeKey) {
        activeContent = child
      }
    })

    if (!activeContent) {
      return children[0]
    }

    return activeContent
  }

  handleChange = (key: ReactText) => {
    if (this.props.onChange) {
      this.props.onChange(key)
    }

    this.setState({ activeKey: key })
  }

  renderHeader() {
    const headers: React.ReactElement<HTMLDivElement>[] = []
    const activeTabKey: any = this.state.activeKey

    React.Children.forEach(this.props.children, (child: React.ReactElement<TabProps>, i: number) => {
      if (!isTab(child)) {
        return
      }

      const key: ReactText = child.key || i
      const className = [
        'tabs-header__item',
        key === activeTabKey ? 'active' : ''
      ]
        .filter(Boolean)
        .join(' ')

      headers.push(
        <div className={className} onClick={() => this.handleChange(key)} key={key}>
            { child.props.label }
        </div>
      )
    })

    return headers
  }

  render() {
    return (
      <div className="tabs">
        <div className="tabs-header">
          { this.renderHeader() }
        </div>
        <div className="tabs-content">
          { this.getActiveContent() }
        </div>
      </div>
    )
  }
}