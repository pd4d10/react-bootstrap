import * as React from 'react'
import { renderToBody, getStyle, createComponent, $c } from '../../utils'
import * as types from '../../types'

export interface AlertProps extends types.CommonProps {
  theme: types.Theme
  dismissible?: boolean
  timeout: number
  onDismiss?: () => void
}

interface NotifyParams extends AlertProps {
  // timeout?: number
}

type AlertState = Readonly<{
  visible: boolean
  isDismissing: boolean
}>

/**
 * Alert desc
 */
export class Alert extends React.Component<AlertProps, AlertState> {
  state: AlertState = {
    visible: true,
    isDismissing: false,
  }

  static defaultProps: Partial<AlertProps> = {
    dismissible: false,
  }

  static $container: HTMLDivElement
  static notifyItemsMapper: { [key: string]: NotifyParams } = {}

  static notify(params: NotifyParams) {
    if (!this.$container) {
      this.$container = document.createElement('div')
    }

    Alert.notifyItemsMapper[Date.now()] = params

    renderToBody(
      <div
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
        }}
      >
        {Object.keys(Alert.notifyItemsMapper).map(key => {
          const params = Alert.notifyItemsMapper[key]
          return (
            <Alert
              key={key}
              {...params}
              style={{
                ...params.style,
                transition: 'all .15s linear',
              }}
              onDismiss={() => {
                params.onDismiss && params.onDismiss()
                delete Alert.notifyItemsMapper[key]
              }}
            />
          )
        })}
      </div>,
      this.$container,
    )
  }

  componentDidMount() {
    if (this.props.timeout) {
      setTimeout(() => {
        this.handleDismiss()
      }, this.props.timeout)
    }
  }

  handleDismiss = () => {
    this.setState({ isDismissing: true })
    setTimeout(() => {
      this.setState({ visible: false })
    }, 150)
    this.props.onDismiss && this.props.onDismiss()
  }

  render() {
    const { props: p } = this
    const className = $c(
      'alert',
      `alert-${p.theme}`,
      p.dismissible && 'alert-dismissible',
      this.state.isDismissing || 'show',
      'fade',
      getStyle(p.bsStyle),
      p.className,
    )

    const divProps = { role: 'alert', className }

    if (p.render) {
      return p.render(divProps)
    }

    return (
      this.state.visible && (
        <div {...divProps}>
          {p.children}
          {p.dismissible && (
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
