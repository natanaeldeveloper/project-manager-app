import React, { useState } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

const MyTabs = (props: TabsProps) => {

  const [activeTabKey, setActiveTabKey] = useState<string>(props.defaultActiveKey ?? '1')

  function handleTabChange(key: string) {
    setActiveTabKey(key)
  }

  return (
    <Tabs
      {...props}
      onChange={handleTabChange}
    />
  )
}

export default MyTabs;