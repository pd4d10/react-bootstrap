import React, { Component, Fragment } from 'react'
import { Portal } from 'react-portal'
import $c from 'classnames'
import { CommonProps } from './utils'
import { Button } from './button'

interface ModalProps extends CommonProps {
  visible?: boolean
  onFinish?: Function
  onCancel?: Function
  body?: React.ReactNode
  footer?: React.ReactNode
}

export class Modal extends Component<ModalProps> {
  componentWillReceiveProps(nextProps: ModalProps) {
    if (nextProps.visible) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }

  handleCancel = () => {
    this.props.onCancel && this.props.onCancel()
  }

  handleFinish = () => {
    this.props.onFinish && this.props.onFinish()
  }

  render() {
    const { visible, className, body, footer, ...rest } = this.props
    return (
      <Portal closeOnOutsideClick closeOnEsc>
        <Fragment>
          <div
            className={$c(className, 'modal', 'fade', visible && 'show')}
            role="dialog"
            style={{
              display: visible ? 'block' : 'none',
            }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLiveLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={this.handleCancel}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">{body}</div>
                <div className="modal-footer">
                  {footer || (
                    <Fragment>
                      <Button theme="secondary" onClick={this.handleCancel}>
                        Close
                      </Button>
                      <Button theme="primary" onClick={this.handleFinish}>
                        Save changes
                      </Button>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
          {visible && <div className="modal-backdrop fade show" />}
        </Fragment>
      </Portal>
    )
  }
}
