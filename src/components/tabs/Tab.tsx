import React from 'react'

export interface TabProps {
  label: string
  disabled?: boolean
}

export default React.memo(function Tab(props: TabProps) {
  return (
    props['children']
  )
})
