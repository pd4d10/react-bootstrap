import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, ButtonTheme } from './utils'

type ButtonSize = 'lg' | 'sm'

interface ButtonProps extends CommonProps {
  theme?: ButtonTheme
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
      theme = 'primary',
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
          `btn-${outline ? 'outline-' : ''}${theme}`,
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
