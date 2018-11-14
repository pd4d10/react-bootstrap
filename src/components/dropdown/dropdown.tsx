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
  open: boolean
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static defaultProps: Partial<DropdownProps> = {
    direction: 'down',
  }

  state = {
    open: false,
  }

  render() {
    const { open } = this.state
    const { text, overlay, theme, size, split, direction, ...rest } = this.props

    const ToggleButton = () => (
      <Button
        theme={theme}
        size={size}
        className={$c('dropdown-toggle', split && 'dropdown-toggle-split')}
        onBlur={() => {
          this.setState({ open: false })
        }}
        data-toggle="dropdown"
        onClick={() => {
          this.setState(({ open }) => ({ open: !open }))
        }}
      >
        {split ? <span className="sr-only">{text}</span> : text}
      </Button>
    )

    return (
      <div
        className={$c(
          `drop${direction}`,
          open && 'show',
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
        {<div className={$c('dropdown-menu', open && 'show')}>{overlay}</div>}
      </div>
    )
  }
}
