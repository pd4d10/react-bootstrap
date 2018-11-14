import * as React from 'react'
import { Portal } from 'react-portal'
import { Transition } from 'react-transition-group'
import { renderToBody, $c, include } from '../../utils'
import * as types from '../../types'
import { Button } from '../button/button'

export interface ModalProps extends types.CommonProps {
  visible?: boolean
  onFinish?: (e: React.MouseEvent) => void
  onCancel?: (e: React.MouseEvent) => void
  title: string
  body?: React.ReactNode
  footer?: React.ReactNode
  domNode?: HTMLElement
  backdrop?: boolean | 'static'
  showClose?: boolean
  closeOnEscPressed?: boolean
  // requestClose: React.DOMAttributes<HTMLDivElement>['onClick']
}

interface ConfirmParams extends types.CommonProps {
  title?: string
  content?: string
  onFinish?: Function
  onCancel?: Function
}

interface ConfirmModalProps extends ConfirmParams {
  domNode: HTMLElement
}

class ConfirmModal extends React.Component<ConfirmModalProps> {
  state = { visible: false }

  componentDidMount() {
    this.setState({ visible: true })
  }

  render() {
    return (
      <Modal
        domNode={this.props.domNode}
        visible={this.state.visible}
        onFinish={() => {
          this.setState({ visible: false })
          this.props.onFinish && this.props.onFinish()
        }}
        onCancel={() => {
          this.setState({ visible: false })
          this.props.onCancel && this.props.onCancel()
        }}
        backdrop="static"
        showClose={false}
      />
    )
  }
}

export class Modal extends React.Component<ModalProps> {
  static defaultProps: Partial<ModalProps> = {
    visible: false,
    backdrop: true,
    closeOnEscPressed: true,
    showClose: true,
  }

  // static confirm({ onFinish, onCancel, ...rest }: ConfirmModalProps) {
  //   const { node, dispose } = renderToBody(
  //     <ConfirmModal
  //       {...rest}
  //       onFinish={() => {
  //         onFinish && onFinish()
  //         document.body.removeChild(node)
  //       }}
  //       onCancel={() => {
  //         onCancel && onCancel()
  //         document.body.removeChild(node)
  //       }}
  //       domNode={node}
  //     />,
  //   )
  // }

  handleClose = (e: React.MouseEvent) => {
    this.props.onCancel && this.props.onCancel(e)
  }

  render() {
    const {
      title,
      visible,
      body,
      footer,
      domNode,
      backdrop,
      showClose,
    } = this.props

    return (
      <Portal
        node={domNode}
        // closeOnOutsideClick closeOnEsc
      >
        <Transition in={visible} timeout={150}>
          {state => {
            const isVisible = include(state, ['entered', 'entering', 'exiting'])
            const hasShow = include(state, ['entered'])

            return (
              <>
                <div
                  className={$c('modal', 'fade', hasShow && 'show')}
                  style={{
                    display: isVisible ? 'block' : 'none',
                  }}
                  role="dialog"
                  onClick={e => {
                    if (e.target === e.currentTarget) {
                      this.handleClose(e)
                    }
                  }}
                  onTransitionEnd={e => {
                    this.setState({ isTransitioning: false })
                  }}
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        {showClose && (
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={this.handleClose}
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        )}
                      </div>
                      <div className="modal-body">{body}</div>
                      <div className="modal-footer">
                        {footer || (
                          <>
                            <Button
                              theme="secondary"
                              onClick={this.handleClose}
                            >
                              Close
                            </Button>
                            <Button
                              theme="primary"
                              onClick={this.props.onFinish}
                            >
                              Finish
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {isVisible && (
                  <div
                    className={$c('modal-backdrop', 'fade', hasShow && 'show')}
                  />
                )}
              </>
            )
          }}
        </Transition>
      </Portal>
    )
  }
}
