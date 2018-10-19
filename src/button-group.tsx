import React from 'react'
import $c from 'classnames'
import * as types from './types'
import { getStyle } from './utils'

export type ButtonGroupProps = types.CommonProps & {
  size?: types.Size
  vertical?: boolean
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {
  render() {
    const { size, vertical, bsStyle, render, ...rest } = this.props
    rest.className = $c(
      rest.className,
      'btn-group',
      size && `btn-group-${size}`,
      vertical && 'btn-group-vertical',
      getStyle(bsStyle),
    )
    if (render) {
      return render({ className: rest.className })
    }
    return <div {...rest} />
  }
}

export type ButtonToolbarProps = types.CommonProps

export class ButtonToolbar extends React.Component<ButtonToolbarProps> {
  render() {
    const { bsStyle, render, ...rest } = this.props
    rest.className = $c(rest.className, 'btn-toolbar', getStyle(bsStyle))
    if (render) {
      return render({ className: rest.className })
    }
    return <div {...rest} />
  }
}
