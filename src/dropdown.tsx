import React from 'react'
import $c from 'classnames'
import { CommonProps, Theme, Size } from './utils'
import { Button } from './button'

interface DropDownProps extends CommonProps {
  text: string
  theme?: Theme
  size?: Size
  split?: boolean
}

export class DropDownItem extends React.Component {
  render() {
    const child = React.Children.only(this.props.children)
    return React.cloneElement(child, {
      className: $c('dropdown-item', child.props.className),
    })
  }
}

export class DropDownDivider extends React.Component {
  render() {
    return <div className="dropdown-divider" />
  }
}

export class DropDown extends React.Component<DropDownProps> {
  render() {
    const {
      text,
      theme,
      size,
      split,
      className,
      children,
      ...rest
    } = this.props
    console.log(this.props)
    return (
      <div className={$c(className, 'dropdown')} {...rest}>
        {split ? (
          <React.Fragment>
            <Button theme={theme} size={size} />
            <Button
              theme={theme}
              size={size}
              className="dropdown-toggle dropdown-toggle-split"
            >
              <span className="sr-only">{text}</span>
            </Button>
          </React.Fragment>
        ) : (
          <Button theme={theme} size={size} className="dropdown-toggle">
            {text}
          </Button>
        )}
        <div className="dropdown-menu">{children}</div>
      </div>
    )
  }
}
