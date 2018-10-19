import React, { Component, HTMLAttributes } from 'react'
import $c from 'classnames'
import { Badge } from './'
import * as types from './types'
import { getStyle } from './utils'

type ListItemProps = types.CommonProps<React.LiHTMLAttributes<HTMLElement>> & {
  active?: boolean
  disabled?: boolean
  theme?: types.Theme
  flush?: boolean
  action?: boolean
}

export class ListItem extends Component<ListItemProps> {
  // handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
  //   if (this.props.onClick) {
  //     this.props.onClick(e, )
  //   }
  // }

  render() {
    const {
      active,
      disabled,
      theme,
      flush,
      action,
      bsStyle,
      render,
      ...rest
    } = this.props
    rest.className = $c(
      rest.className,
      'list-group-item',
      active && 'active',
      disabled && 'disabled',
      flush && `list-group-item-flush`,
      theme && `list-group-item-${theme}`,
      action && `list-group-item-action`,
      getStyle(bsStyle),
    )
    if (render) {
      return render({ className: rest.className })
    }
    return <li {...rest} />
  }
}

type ListProps = types.CommonProps & {
  items: any[]
  render?: Function
  renderItem?: Function
}

export class List extends React.Component<ListProps> {
  render() {
    const { items, render, renderItem, ...rest } = this.props
    rest.className = $c(rest.className, 'list-group')
    if (render) {
      return render({ items, className: rest.className })
    }
    return (
      <ul {...rest}>
        {items.map((item, index, total) => {
          if (renderItem) {
            return renderItem(item, index, total)
          }
          return <ListItem>{item}</ListItem>
        })}
      </ul>
    )
  }
}
