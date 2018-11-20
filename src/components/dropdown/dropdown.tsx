import * as React from 'react'
import { Manager, Reference, Popper } from 'react-popper'
import * as types from '../../types'
import { Button } from '../button/button'
import { $c } from '../../utils'

export interface DropdownProps extends types.CommonProps {
  text: string
  popup: React.ReactElement<any>
  theme?: types.Theme
  size?: types.Size
  split?: boolean
  direction?: types.Direction
  asNavItem?: boolean
}

interface DropdownState {
  open: boolean
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static defaultProps: Partial<DropdownProps> = {
    split: false,
    direction: 'down',
    asNavItem: false,
  }

  $popup: HTMLDivElement | null = null

  state = { open: false }

  handleClickOutside = (e: React.MouseEvent) => {
    if (e.target !== this.$popup) {
      this.setState({ open: false })
    }
  }

  // componentDidMount() {
  //   document.body.addEventListener('click', this.handleClickOutside, true)
  // }

  // componentWillUnmount() {
  //   document.body.removeEventListener('click', this.handleClickOutside, true)
  // }

  render() {
    const {
      text,
      popup,
      theme,
      size,
      split,
      direction,
      asNavItem,
      ...rest
    } = this.props

    return (
      <Manager>
        <div
          className={$c(
            `drop${direction}`,
            this.state.open && 'show',
            asNavItem && 'nav-item',
            // split ? 'btn-group' : 'dropdown',
          )}
          {...rest}
        >
          <Reference>
            {({ ref }) => {
              const ToggleButton = asNavItem ? (
                <a
                  className="dropdown-toggle nav-link"
                  role="button"
                  aria-haspopup
                  aria-expanded={false}
                  onClick={() => {
                    this.setState(({ open }) => ({ open: !open }))
                  }}
                >
                  {text}
                </a>
              ) : (
                <Button
                  ref={ref}
                  theme={theme}
                  size={size}
                  className={$c(
                    'dropdown-toggle',
                    split && 'dropdown-toggle-split',
                  )}
                  onClick={() => {
                    this.setState(({ open }) => ({ open: !open }))
                  }}
                >
                  {split ? <span className="sr-only">{text}</span> : text}
                </Button>
              )

              return split ? (
                <>
                  <Button theme={theme} size={size}>
                    {text}
                  </Button>
                  {ToggleButton}
                </>
              ) : (
                ToggleButton
              )
            }}
          </Reference>

          <Popper placement={direction}>
            {({ ref, style, placement, arrowProps }) => (
              <div
                ref={r => {
                  console.log(r)
                  ref(r)
                }}
                style={style}
                // x-placement={placement}
                className={$c('dropdown-menu', this.state.open && 'show')}
              >
                {popup}
              </div>
            )}
          </Popper>
        </div>
      </Manager>
    )
  }
}
