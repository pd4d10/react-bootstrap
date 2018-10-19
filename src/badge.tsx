import React, { Component } from 'react'
import $c from 'classnames'
import * as types from './types'
import { getStyle } from './utils'

type BadgeProps = types.CommonProps & {
  theme: types.Theme
  pill?: boolean
}

export class Badge extends Component<BadgeProps> {
  render() {
    const { theme = 'secondary', pill, bsStyle, render, ...rest } = this.props

    rest.className = $c(
      rest.className,
      'badge',
      `badge-${theme}`,
      pill && 'badge-pill',
      getStyle(bsStyle),
    )

    if (render) {
      return render({ className: rest.className })
    }

    return <span {...rest} />
  }
}
