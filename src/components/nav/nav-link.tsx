import * as React from 'react'
import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom'
import { $c } from '../../utils'

export const NavLink: React.SFC<NavLinkProps> = props => (
  <RouterNavLink
    {...props}
    activeClassName="active"
    className={$c('nav-item', 'nav-link', props.className)}
  />
)
