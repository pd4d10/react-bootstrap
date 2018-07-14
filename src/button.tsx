import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, ButtonType } from './utils'

type ButtonSize = 'lg' | 'sm'

interface Props extends CommonProps {
  type?: ButtonType
  size?: ButtonSize
  outline?: boolean
  block?: boolean
  disabled?: boolean
  onClick?: Function
}

export class Button extends Component<Props> {
  render() {
    const {
      type = 'primary',
      outline,
      block,
      size,
      disabled,
      style,
      children,
      className,
    } = this.props
    return (
      <button
        type="button"
        role="alert"
        {...{ disabled, style, children }}
        className={$c(
          className,
          'btn',
          `btn-${outline ? 'outline-' : ''}${type}`,
          {
            'btn-block': block,
            [`btn-${size}`]: !!size,
          },
        )}
      />
    )
  }
}
