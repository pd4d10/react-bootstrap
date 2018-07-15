import React, { Component, ReactElement } from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface BreadcrumbItem {
  active?: boolean
  content: string
  href?: string
}
interface BreadcrumbProps extends CommonProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ className, items }: BreadcrumbProps) {
  return (
    <ol className={$c('breadcrumb', className)}>
      {items.map(({ href, active, content }) => {
        let children
        if (typeof content === 'function') {
          let Content = content as any
          // React.createElement(Breadcrumb)
          children = <Content />
        } else {
          children = <a href={href}>{content}</a>
        }
        return <li className={$c('breadcrumb-item', { active })}>{children}</li>
      })}
    </ol>
  )
}

// export const BreadcrumbItem = ({
//   tag: Tag = 'li',
//   className,
//   active,
//   ...rest
// }: BreadcrumbItemProps) => (
//   <Tag className={$c('breadcrumb-item', className, { active })} {...rest} />
// )
