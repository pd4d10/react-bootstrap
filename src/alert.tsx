import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, AlertTheme } from './utils'

interface Props extends CommonProps {
  theme?: AlertTheme
  // [attr: string]: any
}

export class Alert extends Component<Props> {
  render() {
    const { theme = 'primary', className, ...rest } = this.props
    return (
      <div
        role="alert"
        className={$c(className, 'alert', `alert-${theme}`)}
        {...rest}
      />
    )
  }
}
