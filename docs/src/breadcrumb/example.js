import React from 'react'
import { Breadcrumb } from 'relaunch'

export default () => (
  <div>
    <Breadcrumb
      items={[
        {
          render: () => 'Home',
          active: true,
        },
      ]}
    />
    <Breadcrumb
      items={[
        {
          render: () => <a href="#">Home</a>,
        },
        {
          render: () => 'Library',
          active: true,
        },
      ]}
    />
  </div>
)
