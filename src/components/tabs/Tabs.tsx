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
      if (child.key === activeKey || i == activeKey) {
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
        <div className="tabs-item">
          { this.getActiveContent() }
        </div>
      </div>
    )
  }
}
/*
export default React.memo(function Tabs(props: TabsProps) {
  const [activeTabKey, setActiveTabKey] = useState(props.activeKey || 0)

  let activeTabContent: any
  const headers: HeaderState[] = React.Children.map(props.children, (child: React.ReactElement<TabProps>, i: number) => {
    const childKey: ReactText = child.key || i

    if (activeTabKey === childKey) {
      activeTabContent = child
    }

    return {
      key: childKey,
      label: child.props.label
    }
  })

  if (!activeTabContent) {
    activeTabContent = props.children[0]
    setActiveTabKey(props.children[0].key || 0)
  }

  const handleClick = (activeKey: ReactText) => {
    if (props.onChange) {
      props.onChange(activeKey + '')
    }

    setActiveTabKey(activeKey)
  }

  return (
    <div className="tabs">
      <div className="tabs-header">
        { headers.map((header: HeaderState) => {
          const className = [
            'tabs-header__item',
            header.key === activeTabKey ? 'active' : ''
          ].filter(Boolean)

          return (
            <span 
              className={className.join(' ')} 
              key={header.key} 
              onClick={() => handleClick(header.key)}>
                { header.label }
            </span>
          )
        }) }
      </div>
      <div className="tabs-item">
        { activeTabContent }
      </div>
    </div>
  )
})
*/