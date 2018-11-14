import * as React from 'react'
import * as types from '../../types'
import { $c, getStyle } from '../../utils'

export interface NavbarProps extends types.CommonProps {
  color: 'light' | 'dark'
  brand?: JSX.Element
  right?: JSX.Element
}

export class Navbar extends React.Component<NavbarProps> {
  render() {
    const { color, brand, right, children, bsStyle, ...rest } = this.props
    return (
      <nav
        className={$c(
          'navbar',
          'navbar-expand-lg',
          color && `navbar-${color}`,
          getStyle(bsStyle),
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
