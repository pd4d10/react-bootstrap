import React, { Component } from 'react'
import $c from 'classnames'
import * as types from './types'

interface NavProps extends types.CommonProps {
  items: any[]
  vertical?: boolean
  tabs?: boolean
  fill?: boolean
  renderItem: (item: any, index: number) => React.ReactNode
}

interface NavLinkProps extends types.CommonProps {
  active?: boolean
  disabled?: boolean
}

export class NavLink extends React.Component<NavLinkProps> {
  static defaultProps: NavLinkProps = {
    active: false,
    disabled: false,
    component: 'a',
  }

  render() {
    const { component, active, disabled, ...rest } = this.props
    rest.className = $c(
      'nav-link',
      active && 'active',
      disabled && 'disabled',
      rest.className,
    )
    return React.createElement(component!, rest)
  }
}

export class NavItem extends React.Component<CommonProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c('nav-item', rest.className)
    return React.createElement('li', rest)
  }
}

export class Nav extends Component<NavProps> {
  // static defaultProps = {
  //   renderItem: (item: string) => (
  //     <a href="#" className="nav-link">
  //       {item}
  //     </a>
  //   ),
  // }

  render() {
    const { vertical, tabs, fill, items, renderItem, ...rest } = this.props
    rest.className = $c(
      rest.className,
      'nav',
      vertical && 'flex-column',
      tabs && 'nav-tabs',
      fill && 'nav-fill',
    )

    return (
      <nav {...rest}>
        {/* {items.map((item, index) => {
          return renderItem(item, index)
        })} */}
      </nav>
    )
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
