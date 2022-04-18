import React, { ReactText, HTMLAttributes } from 'react'
import Tab, { TabProps } from './Tab'
import { cn } from '../../common/classNames'
import { debounce } from '../../common/debounce'

export interface BaseTabsProps {
  noContent?: boolean
  children: React.ReactElement<TabProps>[]
  activeKey?: ReactText
  onChange?: (activeKey: ReactText) => void
  defaultActiveKey?: ReactText
  vertical?: boolean
}

type TabsProps = Partial<HTMLAttributes<HTMLDivElement> & BaseTabsProps>

interface TabsState {
  activeKey?: ReactText | null
  isArrowLeftDisabled?: boolean,
  isArrowRightDisabled?: boolean,
  isArrowVisible?: boolean
}

interface ArrowProps {
  onMouseDown: () => void
  l?: boolean
  disabled: boolean
}

const isTab = (component: any): boolean => {
  return component && component.type === Tab
}

const Arrow = (props: ArrowProps) => {
  const btnClassName = cn('eyzy-tabs-arrow', {
    l: props.l,
    disabled: props.disabled
  })

  return (
    <button className={btnClassName} onMouseDown={props.onMouseDown}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
      </svg>
    </button>
  )
} 

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
  static Tab = Tab

  _scrolling: boolean

  header = React.createRef<HTMLDivElement>()
  wrap = React.createRef<HTMLDivElement>()
  scrollWrap = React.createRef<HTMLDivElement>()

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

  componentDidMount() {
    this.setCtrlStates(true)

    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  componentDidUpdate(prevProps: Readonly<TabsProps>) {
    if (this.props.activeKey !== undefined && prevProps.activeKey !== this.props.activeKey) {
      this.tryHeaderScroll()
    }
  }

  tryHeaderScroll = () => {
    try {
      const wrap = this.wrap.current
      const activeTab = wrap?.querySelector('.active')

      if (!activeTab || !wrap) {
        return
      }

      const wrapBounds = wrap.getBoundingClientRect()
      const wrapScrollLeft = wrap.scrollLeft
      const activeBounds = activeTab.getBoundingClientRect()

      let nextScroll = null

      if (wrapBounds?.left > activeBounds.left) {
        nextScroll = wrapScrollLeft - (wrapBounds?.left - activeBounds.left)
      } else if (wrapBounds?.right < activeBounds.right) {
        nextScroll = wrapScrollLeft + (activeBounds.right - wrapBounds.right)
      }

      if (nextScroll !== null) {
        wrap.scrollTo({left: nextScroll, behavior: 'smooth'})
      }
    } catch (e) {}
  }

  setCtrlStates = (needScroll?: boolean) => {
    const container = this.wrap.current;
    const wrapper = this.scrollWrap.current;

    if (!container || !wrapper) {
      return;
    }

    if (wrapper.clientWidth <= container.parentNode.clientWidth) {
      
      return this.setState({
        isArrowVisible: false
      }, () => needScroll === true && this.tryHeaderScroll())
    }

    const isArrowLeftDisabled = container.scrollLeft === 0;
    const isArrowRightDisabled = wrapper.clientWidth
      ? parseInt(wrapper.clientWidth - (container.clientWidth + container.scrollLeft)) === 0
      : false;

    this.setState({
      isArrowLeftDisabled,
      isArrowRightDisabled,
      isArrowVisible: true
    }, () => needScroll === true && this.tryHeaderScroll())
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

  headerScrollerLeft = () => {
    this.scrollEl(-1)
  }

  headerScrollerRight = () => {
    this.scrollEl(1)
  }

  scrollEl = (direction: number, power: number = 0.7) => {
    const container = this.wrap.current;
    const left = container.clientWidth * power;

    container.scrollTo({
      top: 0,
      left: container.scrollLeft + (direction * left),
      behavior: 'smooth'
    });
  }

  handleChange = (key: ReactText) => {
    if (key === this.state.activeKey) {
      return
    }

    if (this.props.onChange) {
      this.props.onChange(key)
    }

    this.setState({ activeKey: key }, this.tryHeaderScroll)
  }

  handleWindowResize = debounce(this.setCtrlStates, 200)
  handleHeaderScroll = debounce(this.setCtrlStates, 120)

  renderHeader() {
    const headers: React.ReactElement<HTMLDivElement>[] = []
    const activeTabKey: any = this.state.activeKey

    this.getChildNodes().forEach((child: React.ReactElement<TabProps>, i: number) => {
      if (!isTab(child)) {
        return
      }

      const key: ReactText = child.key || i
      const className = cn({
        'eyzy-tabs-header__item': true,
        'active': key === activeTabKey,
      }, child.props.headerClassName)

      headers.push(
        <div className={className} onClick={() => this.handleChange(key)} key={key}>
          { child.props.label }
        </div>
      )
    })

    return headers
  }

  render() {
    const {className, noContent, vertical} = this.props
    const containerCn = cn('eyzy-tabs', className, { vertical })
    const {isArrowVisible, isArrowLeftDisabled, isArrowRightDisabled} = this.state

    return (
      <div className={containerCn}>
        <div className="eyzy-tabs-header" ref={this.header}>
          {isArrowVisible && (
            <Arrow l disabled={isArrowLeftDisabled} onMouseDown={this.headerScrollerLeft}/>
          )}
          <div className="eyzy-tabs-wrap" ref={this.wrap} onScroll={this.handleHeaderScroll}>
            <div className="eyzy-tabs-scroll" ref={this.scrollWrap}>
              { this.renderHeader() }
            </div>
          </div>
          {isArrowVisible && (
            <Arrow disabled={isArrowRightDisabled} onMouseDown={this.headerScrollerRight}/>
          )}
        </div>
        {!noContent && (
          <div className="eyzy-tabs-content">
            { this.getActiveContent() }
          </div>
        )}
      </div>
    )
  }
}
