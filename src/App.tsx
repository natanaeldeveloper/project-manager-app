import React, { useState } from 'react'

import { BarChartOutlined, BarsOutlined, ProjectOutlined, TableOutlined } from '@ant-design/icons'

import MyTabs from './components/MyTabs'
import MyTable from './components/MyTable'

const App: React.FC = () => {

  return (
    <div>
      <MyTabs
        style={{ margin: 30 }}
        size='small'
        type='card'
        defaultActiveKey='3'
        items={[
          {
            key: '1',
            label: (
              <span>
                <BarsOutlined />
                Table
              </span>
            ),
            children: <MyTable />,
          },
          {
            key: '2',
            label: (
              <span>
                <TableOutlined />
                Board
              </span>
            ),
            children: `Content of Tab Pane 2`,
          },
          {
            key: '3',
            label: (
              <span>
                <ProjectOutlined style={{transform: 'rotate(-90deg)'}} />
                Timeline
              </span>
            ),
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </div>
  )
}

export default App;