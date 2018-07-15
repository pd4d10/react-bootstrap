import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, ButtonType } from './utils'

type ButtonSize = 'lg' | 'sm'

interface ButtonProps extends CommonProps {
  type?: ButtonType
  size?: ButtonSize
  outline?: boolean
  block?: boolean
  disabled?: boolean
  active?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export class Button extends Component<ButtonProps> {
  render() {
    const {
      type = 'primary',
      outline,
      block,
      size,
      active,
      className,
      ...rest
    } = this.props
    return (
      <button
        type="button"
        role="button"
        className={$c(
          className,
          'btn',
          `btn-${outline ? 'outline-' : ''}${type}`,
          {
            'btn-block': block,
            [`btn-${size}`]: !!size,
            active,
          },
        )}
        {...rest}
      />
    )
  }
}
