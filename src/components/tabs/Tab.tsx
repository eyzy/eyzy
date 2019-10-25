import React, {ReactNode} from 'react'

export interface TabProps {
  label: string
  disabled?: boolean
  tab?: ReactNode
  headerClassName?: string
}

const Tab: React.FC<TabProps> = (props) => {
  return (
    <div className="eyzy-tabs-content__item">
      { props.children || props.tab }
    </div>
  )
}

export default React.memo<React.FC<TabProps>>(Tab)