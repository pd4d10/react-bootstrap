import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, Theme } from './utils'
import { isFunction } from 'util'

interface BadgeProps extends CommonProps {
  theme: Theme
  pill?: boolean
  render?: Function
}

export class Badge extends Component<BadgeProps> {
  render() {
    const { theme = 'primary', pill, render, ...rest } = this.props
    rest.className = $c(
      rest.className,
      'badge',
      `badge-${theme}`,
      pill && 'badge-pill',
    )

    if (render) {
      return render(rest)
    } else {
      return <span {...rest} />
    }
  }
}
