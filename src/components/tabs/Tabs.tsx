import React, { ReactText, HTMLAttributes } from 'react'
import Tab, { TabProps } from './Tab'
import { cn } from '../../common/classNames'

export interface BaseTabsProps {
  children: React.ReactElement<TabProps>[]
  activeKey?: ReactText
  onChange?: (activeKey: ReactText) => void
  defaultActiveKey?: ReactText
}

type TabsProps = Partial<HTMLAttributes<HTMLDivElement> & BaseTabsProps>

interface TabsState {
  activeKey?: ReactText | null
}

const isTab = (component: any): boolean => {
  return component && component.type === Tab
}

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
  static Tab = Tab

  constructor(props: TabsProps) {
    super(props)

    const state = {
      activeKey: props.defaultActiveKey || props.activeKey || null
    }

    if (!state.activeKey && !props.activeKey) {
      const children = this.getChildNodes(props.children)
      state.activeKey = (children[0] && children[0].key) || 0
    }

    this.state = state
  }

  static getDerivedStateFromProps(props: TabsProps) {
    if (props.activeKey) {
      return {
        activeKey: props.activeKey
      }
    }

    return null
  }

  getChildNodes = (children = this.props.children): React.ReactElement<TabProps>[] => {
    const childNodes: React.ReactElement<TabProps>[] = []

    React.Children.forEach(children, (item: React.ReactElement<TabProps>) => {
      childNodes.push(item)
    })

    return childNodes
  }

  getActiveContent = (): React.ReactElement<TabProps> | null => {
    const children = this.props.children
    const activeKey = this.state.activeKey

    const activeContent: React.ReactElement<TabProps> | undefined = this.getChildNodes()
      .find((child, i: number) => {
        return child.key === activeKey || i === activeKey
      })

    return activeContent || (children ? children[0] : null)
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

    this.getChildNodes().forEach((child: React.ReactElement<TabProps>, i: number) => {
      if (!isTab(child)) {
        return
      }

      const key: ReactText = child.key || i
      const className = [
        'eyzy-tabs-header__item',
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
    const className = cn('eyzy-tabs', this.props.className)

    return (
      <div className={className}>
        <div className="eyzy-tabs-header">
          { this.renderHeader() }
        </div>
        <div className="eyzy-tabs-content">
          { this.getActiveContent() }
        </div>
      </div>
    )
  }
}