import React, { LinkHTMLAttributes, HTMLAttributes } from 'react'
import $c from 'classnames'
import $ from 'jquery'
import 'bootstrap/js/dist/dropdown'
import { CommonProps, Theme, Size, Direction } from './utils'
import { Button } from './button'

declare global {
  interface JQuery {
    dropdown: Function
  }
}

interface DropdownProps extends CommonProps {
  text: string
  overlay: React.ReactElement<any>
  theme?: Theme
  size?: Size
  split?: boolean
  direction?: Direction
}

interface DropdownItemProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  disabled?: boolean
  render?: (props: { className: string }) => React.ReactNode
}

export class DropdownItem extends React.Component<DropdownItemProps> {
  render() {
    const { active, disabled, render, ...rest } = this.props
    rest.className = $c(
      'dropdown-item',
      active && 'active',
      disabled && 'disabled',
      rest.className,
    )
    if (render) {
      return render({ className: rest.className })
    }

    return <a {...rest} />
  }
}

interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {}

export class DropdownDivider extends React.Component<DropdownDividerProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c('dropdown-divider', rest.className)
    return <div {...rest} />
  }
}

interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {}

export class DropdownMenu extends React.Component<DropdownMenuProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c('dropdown-menu', rest.className)
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
          <React.Fragment>
            <Button theme={theme} size={size}>
              {text}
            </Button>
            <ToggleButton />
          </React.Fragment>
        ) : (
          <ToggleButton />
        )}
        {overlay}
      </div>
    )
  }
}
