import React from 'react'
import { Portal } from 'react-portal'
import $ from 'jquery'
import 'bootstrap/js/dist/modal'
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

export class Modal extends React.Component<ModalProps> {
  modalRef: React.RefObject<HTMLDivElement>
  $modal?: JQuery<HTMLDivElement>

  constructor(props: ModalProps) {
    super(props)
    this.modalRef = React.createRef()
  }

  componentDidMount() {
    this.$modal = $(this.modalRef.current as HTMLDivElement)
  }

  componentDidUpdate() {
    const $modal = this.$modal as JQuery<HTMLDivElement>
    if (this.props.visible) {
      $modal.modal('show')

      // Remove default dismiss event to respect visible prop
      $modal.off('click.dismiss.bs.modal')
      $modal.on('click.dismiss.bs.modal', event => {
        if (event.target !== event.currentTarget) {
          return
        }

        this.handleCancel()
      })
    } else {
      $modal.modal('hide')
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
      <Portal
      // closeOnOutsideClick closeOnEsc
      >
        <div
          className={$c(className, 'modal', 'fade')}
          role="dialog"
          ref={this.modalRef}
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
                  <React.Fragment>
                    <Button theme="secondary" onClick={this.handleCancel}>
                      Close
                    </Button>
                    <Button theme="primary" onClick={this.handleFinish}>
                      Save changes
                    </Button>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </Portal>
    )
  }
}
