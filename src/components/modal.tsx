import * as React from 'react'
import { Portal } from 'react-portal'
import $ from 'jquery'
import 'bootstrap/js/dist/modal'
import { renderToBody, $c } from '../utils'
import * as types from '../types'
import { Button } from './button'

declare global {
  interface JQuery {
    modal: Function
  }
}

interface ModalProps extends types.CommonProps {
  visible?: boolean
  onFinish?: Function
  onCancel?: Function
  body?: React.ReactNode
  footer?: React.ReactNode
  domNode?: HTMLElement
  backdrop?: boolean | 'static'
  showClose?: boolean
  closeOnEscPressed?: boolean
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
  modalRef: React.RefObject<HTMLDivElement>
  $modal?: JQuery<HTMLDivElement>

  constructor(props: ModalProps) {
    super(props)
    this.modalRef = React.createRef()
  }

  static defaultProps: ModalProps = {
    visible: false,
    backdrop: true,
    closeOnEscPressed: true,
    showClose: true,
  }

  static confirm({ onFinish, onCancel, ...rest }: ConfirmModalProps) {
    const { node, dispose } = renderToBody(
      <ConfirmModal
        {...rest}
        onFinish={() => {
          onFinish && onFinish()
          document.body.removeChild(node)
        }}
        onCancel={() => {
          onCancel && onCancel()
          document.body.removeChild(node)
        }}
        domNode={node}
      />,
    )
  }

  componentDidMount() {
    this.$modal = $(this.modalRef.current!)
    const $modal = this.$modal!
    $modal.modal({
      backdrop: this.props.backdrop,
      // keyboard: this.props.closeOnEscPressed,
      // focus: true,
      show: this.props.visible,
    })
  }

  componentDidUpdate() {
    const $modal = this.$modal!
    if (this.props.visible) {
      $modal.modal('show')

      // Remove default dismiss event to respect visible prop
      $modal.off('click.dismiss.bs.modal')
      $modal.on('click.dismiss.bs.modal', event => {
        if (event.target !== event.currentTarget) {
          return
        }

        if (this.props.backdrop === 'static') {
          $modal.focus()
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
    const {
      visible,
      className,
      body,
      footer,
      domNode,
      backdrop,
      showClose,
      ...rest
    } = this.props
    return (
      <Portal
        node={domNode}
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
                {showClose && (
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={this.handleCancel}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                )}
              </div>
              <div className="modal-body">{body}</div>
              <div className="modal-footer">
                {footer || (
                  <>
                    <Button theme="secondary" onClick={this.handleCancel}>
                      Close
                    </Button>
                    <Button theme="primary" onClick={this.handleFinish}>
                      Save changes
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Portal>
    )
  }
}
