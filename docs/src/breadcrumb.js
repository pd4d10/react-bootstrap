import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from './relaunch'

export function BreadcrumbExample() {
  return (
    <div>
      <Breadcrumb
        items={[
          { href: '#', content: 'Home' },
          { href: '#', content: 'Library' },
          { active: true, content: 'Data' },
        ]}
      />
      <Breadcrumb
        items={[
          { content: () => <Link to="/">a</Link> },
          { href: '#', content: 'Library' },
          { active: true, content: 'Data' },
        ]}
      />
    </div>
  )
}
