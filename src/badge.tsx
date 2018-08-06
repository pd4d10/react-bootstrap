import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, Theme } from './utils'

interface BadgeProps extends CommonProps {
  theme: Theme
  pill?: boolean
}

export class Badge extends Component<BadgeProps> {
  render() {
    const { theme = 'secondary', pill, children, ...rest } = this.props
    rest.className = $c(
      rest.className,
      'badge',
      `badge-${theme}`,
      pill && 'badge-pill',
    )

    if (typeof children === 'string') {
      return <span {...rest} />
    }

    const child = React.Children.only(children)
    return React.cloneElement(child, {
      className: $c(rest.className, child.props.className),
    })
  }
}
