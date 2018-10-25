import React, { Component } from 'react'
import * as types from './types'
import { $c } from './utils'

interface NavbarBrandProps extends types.CommonProps {
  href?: string
  to?: string
  component?: React.ReactType
}

interface NavbarProps extends types.CommonProps {
  theme: 'light' | 'dark'
  brand: JSX.Element
  items: {
    component?: React.ReactType
    active?: boolean
    disabled?: boolean
  }[]
}

interface NavProps extends types.CommonProps {}

interface NavItemProps extends types.CommonProps {
  active?: boolean
}

interface NavLinkProps extends types.CommonProps {
  tag?: string
}

export class NavbarBrand extends React.Component<NavbarBrandProps> {
  static defaultProps: Partial<NavbarBrandProps> = {
    component: 'a',
  }

  render() {
    const { component, ...rest } = this.props
    rest.className = $c(rest.className, 'navbar-brand')
    return React.createElement(component!, rest)
  }
}

export class Navbar extends Component<NavbarProps> {
  static defaultProps = {
    // renderBrand: () => <div />,
    renderItem: ({ component, active, disabled }) => (
      <li
        className={$c('nav-item', active && 'active', disabled && 'disabled')}
      >
        <a className="nav-link" href="#">
          Features
        </a>
      </li>
    ),
  }

  render() {
    const { className, theme = 'light', brand, items, ...rest } = this.props
    return (
      <nav className={$c('navbar', `navbar-${theme}`, className)}>
        {brand && <NavbarBrand>{brand}</NavbarBrand>}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map(({ component = 'a', active, disabled }, index) => (
              <li
                className={$c(
                  'nav-item',
                  active && 'active',
                  disabled && 'disabled',
                )}
              >
                {React.createElement(component, {
                  className: 'nav-link',
                  ...props,
                })}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

export const NavbarNav = ({ className, ...rest }: NavProps) => (
  <ul className={$c('navbar-nav', className)} {...rest} />
)

export const NavItem = ({ className, active, ...rest }: NavItemProps) => (
  <li className={$c('nav-item', className, { active })} {...rest} />
)

export const NavLink = ({
  className,
  tag: Tag = 'a',
  ...rest
}: NavLinkProps) => <Tag className={$c('nav-link', className)} {...rest} />
