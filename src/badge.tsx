import React, { Component } from 'react'
import $c from 'classnames'
import * as types from './types'

interface BadgeProps extends types.CommonProps {
  theme: types.Theme
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
