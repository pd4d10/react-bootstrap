import React from 'react'
import $ from 'jquery'
import 'bootstrap/js/dist/dropdown'
import * as types from '../types'
import { Button } from './button'
import { createComponent, $c } from '../utils'

export interface DropdownProps extends types.CommonProps {
  text: string
  overlay: React.ReactElement<any>
  theme?: types.Theme
  size?: types.Size
  split?: boolean
  direction?: types.Direction
}

interface DropdownState {
  visible: boolean
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static defaultProps: Partial<DropdownProps> = {
    direction: 'down',
  }

  state = {
    visible: false,
  }

  render() {
    const { visible } = this.state
    const {
      text,
      overlay,
      theme,
      size,
      split,
      direction,
      className,
      ...rest
    } = this.props

    const ToggleButton = () => (
      <Button
        theme={theme}
        size={size}
        className={$c('dropdown-toggle', split && 'dropdown-toggle-split')}
        data-toggle="dropdown"
        onClick={() => {
          this.setState(({ visible }) => ({
            visible: !visible,
          }))
        }}
      >
        {split ? <span className="sr-only">{text}</span> : text}
      </Button>
    )

    return (
      <div
        className={$c(
          className,
          direction && `drop${direction}`,
          visible && 'show',
          // split ? 'btn-group' : 'dropdown',
        )}
        {...rest}
      >
        {split ? (
          <>
            <Button theme={theme} size={size}>
              {text}
            </Button>
            <ToggleButton />
          </>
        ) : (
          <ToggleButton />
        )}
        {overlay}
      </div>
    )
  }
}

export interface DropdownItemProps {
  active?: boolean
  disabled?: boolean
}

export const DropdownItem = createComponent<'a', DropdownItemProps>(
  'DropdownItem',
  'a',
  ({ active, disabled, ...rest }) => {
    rest.className = $c(
      rest.className,
      'dropdown-item',
      active && 'active',
      disabled && 'disabled',
    )
    return rest
  },
)

export const DropdownDivider = createComponent('DropdownDivider')

export const DropdownMenu = createComponent('DropdownMenu')

export const DropdownHeader = createComponent('DropdownHeader')
