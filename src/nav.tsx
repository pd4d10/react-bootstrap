import React from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface NavProps extends CommonProps {
  vertical?: boolean
  items: {
    content: string | Function
    href?: string
    active?: boolean
  }[]
}

export function Nav({ className, vertical, items, ...rest }: NavProps) {
  return (
    <nav className={$c('nav', className, vertical && 'flex-column')} {...rest}>
      {items.map(({ content: Content, href, active }) => {
        if (typeof Content === 'string') {
          Content = () => <a href={href}>{Content}</a>
        }
        return <Content className={$c('nav-link', { active })} />
      })}
    </nav>
  )
}
