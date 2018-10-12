import React, { Component } from 'react'
import $c from 'classnames'
import * as types from './types'

type ButtonGroupProps = types.CommonProps & {
  size?: types.Size
  vertical?: boolean
}

export class ButtonGroup extends Component<ButtonGroupProps> {
  render() {
    const { size, vertical, render, ...rest } = this.props
    rest.className = $c(
      'btn-group',
      size && `btn-group-${size}`,
      vertical && 'btn-group-vertical',
      rest.className,
    )
    if (render) {
      return render({ className: rest.className })
    }
    return <div {...rest} />
  }
}

type ButtonToolbarProps = types.CommonProps

export class ButtonToolbar extends Component<ButtonToolbarProps> {
  render() {
    const { render, ...rest } = this.props
    rest.className = $c(rest.className, 'btn-toolbar')
    if (render) {
      return render({ className: rest.className })
    }
    return <div {...rest} />
  }
}
