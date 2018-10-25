import React from 'react'
import $ from 'jquery'
import 'bootstrap/js/dist/dropdown'
import * as types from './types'
import { Button } from './button'
import { createComponent, $c } from './utils'

declare global {
  interface JQuery {
    dropdown: Function
  }
}

export interface DropdownProps extends types.CommonProps {
  text: string
  overlay: React.ReactElement<any>
  theme?: types.Theme
  size?: types.Size
  split?: boolean
  direction?: types.Direction
}

export class Dropdown extends React.Component<DropdownProps> {
  static defaultProps: Partial<DropdownProps> = {
    split: false,
    direction: 'down',
  }

  toggleRef: React.RefObject<Button>
  $toggle?: JQuery<Button>

  constructor(props: DropdownProps) {
    super(props)
    this.toggleRef = React.createRef()
  }

  componentDidMount() {
    this.$toggle = $(this.toggleRef.current!)
  }

  render() {
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
        ref={this.toggleRef}
        onClick={() => {
          this.$toggle!.dropdown()
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
