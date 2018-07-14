import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, AlertType } from './utils'

interface Props extends CommonProps {
  type?: AlertType
}

export class Alert extends Component<Props> {
  render() {
    const { type = 'primary', children, style, className } = this.props
    const alertProps = { children, style }
    return (
      <div
        role="alert"
        className={$c(className, 'alert', `alert-${type}`)}
        {...alertProps}
      />
    )
  }
}
