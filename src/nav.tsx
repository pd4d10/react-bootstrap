import React, { Component } from 'react'
import $c from 'classnames'
import * as types from './types'
import { getStyle, createComponent } from './utils'

export interface NavLinkProps
  extends types.CommonProps<React.AnchorHTMLAttributes<HTMLElement>> {
  active?: boolean
  disabled?: boolean
}

export class NavLink extends React.Component<NavLinkProps> {
  static defaultProps: NavLinkProps = {
    active: false,
    disabled: false,
  }

  render() {
    const { active, disabled, bsStyle, render, ...rest } = this.props
    rest.className = $c(
      rest.className,
      'nav-link',
      active && 'active',
      disabled && 'disabled',
      getStyle(bsStyle),
    )
    if (render) {
      return render({ className: rest.className })
    }
    return <a {...rest} />
  }
}

export const NavItem = createComponent('NavItem', 'li')

export interface NavProps extends types.CommonProps {
  items: any[]
  vertical?: boolean
  tabs?: boolean
  fill?: boolean
  renderItem: (item: any, index: number) => React.ReactNode
}

export class Nav extends Component<NavProps> {
  render() {
    const { vertical, tabs, fill, items, renderItem, ...rest } = this.props
    rest.className = $c(
      rest.className,
      'nav',
      vertical && 'flex-column',
      tabs && 'nav-tabs',
      fill && 'nav-fill',
    )

    return <nav {...rest} />
  }
}

export class Tabs extends React.Component<types.CommonProps> {
  render() {
    const { items } = this.props
    return (
      <>
        <ul className="nav nav-pills mb-3" role="tablist">
          {items.map(item => (
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home
              </a>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
