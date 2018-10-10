import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, Size } from './utils'

interface ButtonGroupProps extends CommonProps {
  size?: Size
  vertical?: boolean
}

export class ButtonGroup extends Component<ButtonGroupProps> {
  render() {
    const { size, vertical, ...rest } = this.props
    rest.className = $c(
      'btn-group',
      size && `btn-group-${size}`,
      vertical && 'btn-group-vertical',
      rest.className,
    )
    return <div role="group" {...rest} />
  }
}

interface ButtonToolbarProps extends CommonProps {}

export class ButtonToolbar extends Component<ButtonToolbarProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c(rest.className, 'btn-toolbar')
    return <div role="toolbar" {...rest} />
  }
}
