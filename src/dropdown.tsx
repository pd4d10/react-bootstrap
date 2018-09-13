import React from 'react'
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

interface DropdownItemProps extends CommonProps {
  active?: boolean
  disabled?: boolean
}

export class DropdownItem extends React.Component<DropdownItemProps> {
  render() {
    const { active, disabled, children } = this.props
    const child = React.Children.only(children)

    return React.cloneElement(child, {
      className: $c(
        'dropdown-item',
        active && 'active',
        disabled && 'disabled',
        child.props.className,
      ),
    })
  }
}

export class DropdownDivider extends React.Component<CommonProps> {
  render() {
    const { className, ...rest } = this.props
    return <div className={$c('dropdown-divider', className)} {...rest} />
  }
}

export class DropdownMenu extends React.Component<CommonProps> {
  render() {
    const { className, ...rest } = this.props
    return <div className={$c('dropdown-menu', className)} {...rest} />
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
