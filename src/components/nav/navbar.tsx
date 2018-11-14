import React from 'react'
import * as types from '../../types'
import { $c } from '../../utils'

export interface NavbarProps extends types.CommonProps {
  theme: 'light' | 'dark'
  bg: 'light' | 'dark'
  brand?: JSX.Element
  right?: JSX.Element
}

export class Navbar extends React.Component<NavbarProps> {
  render() {
    const { theme, bg, brand, right, children } = this.props
    return (
      <nav
        className={$c(
          'navbar',
          'navbar-expand-lg',
          theme && `navbar-${theme}`,
          bg && `bg-${bg}`,
        )}
      >
        {brand}
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">{children}</div>
        </div>
        {right}
      </nav>
    )
  }
}
