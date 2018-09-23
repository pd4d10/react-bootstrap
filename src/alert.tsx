import React, { AnchorHTMLAttributes } from 'react'
import $c from 'classnames'
import { CommonProps, Theme } from './utils'

interface AlertProps extends CommonProps {
  theme: Theme
  dismissible?: boolean
  onDismiss?: () => void
}

const initialState = {
  visible: true,
  isDismissing: false,
}

type AlertState = Readonly<typeof initialState>

export class Alert extends React.Component<AlertProps, AlertState> {
  readonly state: AlertState = initialState

  static defaultProps: Partial<AlertProps> = {
    dismissible: false,
  }

  handleDismiss: AlertProps['onDismiss'] = () => {
    this.setState({ isDismissing: true })
    setTimeout(() => {
      this.setState({ visible: false })
    }, 150)
    this.props.onDismiss && this.props.onDismiss()
  }

  render() {
    const { theme, dismissible, onDismiss, children, ...rest } = this.props

    rest.className = $c(
      rest.className,
      'alert',
      `alert-${theme}`,
      dismissible && 'alert-dismissible',
      this.state.isDismissing || 'show',
      'fade',
    )

    return (
      this.state.visible && (
        <div role="alert" {...rest}>
          {children}
          {dismissible && (
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.handleDismiss}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          )}
        </div>
      )
    )
  }
}

interface AlertLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  render: (props: { className: string }) => React.ReactNode
}

export class AlertLink extends React.Component<AlertLinkProps> {
  render() {
    const { render, ...rest } = this.props
    rest.className = $c(rest.className, 'alert-link')
    if (render) {
      return render({ className: rest.className })
    }
    return <a {...rest} />
  }
}
