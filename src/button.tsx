import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps, ButtonTheme, Size } from './utils'

interface ButtonProps extends CommonProps {
  theme?: ButtonTheme
  size?: Size
  outline?: boolean
  block?: boolean
  disabled?: boolean
  active?: boolean
  render?: Function
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
      render,
      ...rest
    } = this.props

    rest.className = $c(
      rest.className,
      'btn',
      `btn-${outline ? 'outline-' : ''}${theme}`,
      block && 'btn-block',
      size && `btn-${size}`,
      active && 'active',
    )

    if (render) {
      return render(rest)
    } else {
      return <button type="button" role="button" {...rest} />
    }
  }
}
