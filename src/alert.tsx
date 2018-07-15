import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, AlertType } from './utils'

interface Props extends CommonProps {
  type?: AlertType
  // [attr: string]: any
}

export class Alert extends Component<Props> {
  render() {
    const { type = 'primary', className, ...rest } = this.props
    return (
      <div
        role="alert"
        className={$c(className, 'alert', `alert-${type}`)}
        {...rest}
      />
    )
  }
}
