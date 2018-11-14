import * as React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { $c } from '../../utils'

export const NavRouterLink: React.SFC<NavLinkProps> = props => (
  <NavLink
    {...props}
    activeClassName="active"
    className={$c('nav-item', 'nav-link', props.className)}
  />
)
