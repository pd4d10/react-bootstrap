import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface NavProps extends CommonProps {
  items: any[]
  vertical?: boolean
  tab?: boolean
  fill?: boolean
  renderItem: (item: any, index: number) => React.ReactNode
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
    const {
      className,
      vertical,
      tab,
      fill,
      items,
      renderItem,
      ...rest
    } = this.props

    return (
      <nav
        className={$c(
          className,
          'nav',
          vertical && 'flex-column',
          tab && 'nav-tabs',
          fill && 'nav-fill',
        )}
        {...rest}
      >
        {items.map((item, index) => {
          return renderItem(item, index)
        })}
      </nav>
    )
  }
}
