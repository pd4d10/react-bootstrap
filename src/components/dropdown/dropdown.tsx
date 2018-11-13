import * as React from 'react'
import * as types from '../../types'
import { Button } from '../button/button'
import { $c } from '../../utils'

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
    const { text, overlay, theme, size, split, direction, ...rest } = this.props

    const ToggleButton = () => (
      <Button
        theme={theme}
        size={size}
        attrs={{
          className: $c('dropdown-toggle', split && 'dropdown-toggle-split'),
        }}
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
