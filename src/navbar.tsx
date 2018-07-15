import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface NavbarBrandProps extends CommonProps {
  tag?: string
}

interface NavbarProps extends CommonProps {
  theme: 'light' | 'dark'
}

interface NavProps extends CommonProps {}

interface NavItemProps extends CommonProps {
  active?: boolean
}

interface NavLinkProps extends CommonProps {
  tag?: string
}

export const NavbarBrand = ({
  className,
  tag: Tag = 'a',
  ...rest
}: NavbarBrandProps) => (
  <Tag className={$c('navbar-brand', className)} {...rest} />
)

export class Navbar extends Component<NavbarProps> {
  render() {
    const { className, theme = 'light', ...rest } = this.props
    return (
      <nav className={$c('navbar', `navbar-${theme}`, className)} {...rest} />
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
