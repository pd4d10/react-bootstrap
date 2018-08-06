import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, Theme } from './utils'

interface BadgeProps extends CommonProps {
  theme: Theme
  pill?: boolean
}

export class Badge extends Component<BadgeProps> {
  render() {
    const {
      theme = 'secondary',
      pill,
      className,
      children,
      ...rest
    } = this.props

    const classes = $c(
      className,
      'badge',
      `badge-${theme}`,
      pill && 'badge-pill',
    )

    if (typeof children === 'string') {
      return (
        <span className={classes} {...rest}>
          {children}
        </span>
      )
    }

    const child = React.Children.only(children)
    return React.cloneElement(child, {
      className: $c(classes, child.props.className),
    })
  }
}
