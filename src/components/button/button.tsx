import * as React from 'react'
import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'
import * as types from '../../types'
import { getStyle, $c } from '../../utils'

export interface ButtonProps extends types.CommonProps<'button'> {
  theme?: types.ButtonTheme
  outline?: boolean
  size?: types.Size
  block?: boolean
  active?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

/**
 * Button desc
 */
export class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    theme: 'primary',
  }

  render() {
    const { props: p } = this
    const className = $c(
      'btn',
      `btn-${p.outline ? 'outline-' : ''}${p.theme}`,
      p.size && `btn-${p.size}`,
      p.block && 'btn-block',
      p.active && 'active',
      getStyle(p.bsStyle),
      p.attrs && p.attrs.className,
    )

    if (p.render) {
      return p.render({ className })
    }

    const buttonProps = {
      ...p.attrs,
      disabled: p.disabled,
      onClick: p.onClick,
      className,
    }

    return (
      <button {...buttonProps}>
        {p.loading && (
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
        {p.children}
      </button>
    )
  }
}
