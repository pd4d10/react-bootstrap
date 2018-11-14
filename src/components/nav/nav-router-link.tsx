import * as React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from './nav-link'

export const NavRouterLink = ({ active, ...rest }) => (
  <NavLink
    active={active}
    render={({ className }) => <Link className={className} {...rest} />}
  />
)
