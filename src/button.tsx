import React from 'react'
import $c from 'classnames'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'
import { CommonProps, ButtonTheme, Size } from './utils'

interface ButtonProps extends CommonProps {
  theme?: ButtonTheme
  outline?: boolean
  size?: Size
  block?: boolean
  active?: boolean
  disabled?: boolean
  loading?: boolean | React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  render?: (props: { className: string }) => React.ReactNode
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps: Partial<ButtonProps> = {
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
      render,
      children,
      ...rest
    } = this.props

    rest.className = $c(
      rest.className,
      'btn',
      `btn-${outline ? 'outline-' : ''}${theme}`,
      size && `btn-${size}`,
      block && 'btn-block',
      active && 'active',
    )

    if (render) {
      return render({
        className: rest.className,
      })
    }

    return (
      <button type="button" role="button" {...rest}>
        {loading && loading === true ? (
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
        ) : (
          loading
        )}
        {children}
      </button>
    )
  }
}
