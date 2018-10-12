import React, { HTMLAttributes } from 'react'
import $c from 'classnames'
import $ from 'jquery'
import 'bootstrap/js/dist/dropdown'
import * as types from './types'
import { Button } from './button'

declare global {
  interface JQuery {
    dropdown: Function
  }
}

interface DropdownProps extends types.CommonProps<HTMLAttributes<HTMLElement>> {
  text: string
  overlay: React.ReactElement<any>
  theme?: types.Theme
  size?: types.Size
  split?: boolean
  direction?: types.Direction
}

interface DropdownItemProps {
  active?: boolean
  disabled?: boolean
  component?: React.ReactType
}

export class DropdownItem extends React.Component<DropdownItemProps> {
  static defaultProps: Partial<DropdownItemProps> = {
    component: 'a',
  }

  render() {
    const { active, disabled, component, ...rest } = this.props
    const Component = component!
    rest.className = $c(
      rest.className,
      'dropdown-item',
      active && 'active',
      disabled && 'disabled',
    )
    return <Component {...rest} />
  }
}

interface DropdownDividerProps extends React.AllHTMLAttributes<HTMLElement> {}

export class DropdownDivider extends React.Component<DropdownDividerProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c('dropdown-divider', rest.className)
    return <div {...rest} />
  }
}

interface DropdownMenuProps extends React.AllHTMLAttributes<HTMLElement> {}

export class DropdownMenu extends React.Component<DropdownMenuProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c(rest.className, 'dropdown-menu')
    return <div {...rest} />
  }
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
