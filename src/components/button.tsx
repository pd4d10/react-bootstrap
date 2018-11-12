import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'
import * as types from '../types'
import { getStyle, $c } from '../utils'

export interface ButtonProps extends types.CommonProps<'button'> {
  theme?: types.ButtonTheme
  outline?: boolean
  size?: types.Size
  block?: boolean
  active?: boolean
  disabled?: boolean
  loading?: boolean
}

/**
 * Button
 */
export class Button extends Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    theme: 'primary',
  }

  render() {
    const {
      theme,
      outline,
      size,
      block,
      active,
      loading,
      children,
      bsStyle,
      render,
      ...rest
    } = this.props

    rest.className = $c(
      rest.className,
      'btn',
      `btn-${outline ? 'outline-' : ''}${theme}`,
      size && `btn-${size}`,
      block && 'btn-block',
      active && 'active',
      getStyle(bsStyle),
    )

    if (render) {
      return render({ className: rest.className })
    }

    return (
      <button {...rest}>
        {loading && (
          <Icon
            path={mdiLoading}
            color="#fff"
            spin={1}
            style={{
              width: '1em',
              verticalAlign: '-0.12em',
              marginRight: '0.3em',
            }}
          />
        )}
        {children}
      </button>
    )
  }
}