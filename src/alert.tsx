import React from 'react'
import $c from 'classnames'
import { CommonProps, Theme } from './utils'

interface AlertProps extends CommonProps {
  theme?: Theme
  closable?: boolean
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const initialState = {
  visible: true,
}

type AlertState = Readonly<typeof initialState>

export class Alert extends React.Component<AlertProps, AlertState> {
  readonly state: AlertState = initialState

  handleClose: AlertProps['onClose'] = e => {
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
