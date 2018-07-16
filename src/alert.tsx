import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, AlertTheme } from './utils'

interface AlertProps extends CommonProps {
  theme?: AlertTheme
  closable?: boolean
  onClose?: (event: MouseEvent) => void
}

type AlertState = {
  visible: boolean
}

export class Alert extends Component<AlertProps, AlertState> {
  state = {
    visible: true,
  }

  handleClose = (e: MouseEvent) => {
    this.setState({ visible: false })
    this.props.onClose && this.props.onClose(e)
  }

  render() {
    const {
      theme = 'primary',
      closable = false,
      onClose,
      children,
      ...rest
    } = this.props

    rest.className = $c(
      rest.className,
      'alert',
      `alert-${theme}`,
      closable && 'alert-dismissible',
    )

    return (
      this.state.visible && (
        <div role="alert" {...rest}>
          {children}
          {closable && (
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          )}
        </div>
      )
    )
  }
}
