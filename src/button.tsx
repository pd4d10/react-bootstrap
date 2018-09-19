import React, { Component, ReactNode } from 'react'
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
}

export class Provider extends React.Component<{ state: any }> {
  constructor(props: { state: any }) {
    super(props)
    this.state = props.state
  }
  render() {
    return this.props.children({
      state: this.state,
      setState: this.setState.bind(this),
    })
  }
}

export class Button extends Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    theme: 'primary',
    loading: false,
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

    return (
      <button type="button" role="button" {...rest}>
        {loading && loading === true ? (
          <Icon
            path={mdiLoading}
            // size={1}
            color="#fff"
            // horizontal
            // vertical
            spin={1}
            // color="red"
            style={{ width: 20, marginRight: 4 }}
          />
        ) : (
          loading
        )}
        {children}
      </button>
    )
  }
}
