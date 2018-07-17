import React, { Component } from 'react'
import $c from 'classnames'
import { Badge } from './badge'
import { CommonProps, Theme } from './utils'

interface ListItemProps extends CommonProps {
  active?: boolean
  disabled?: boolean
  theme?: Theme
  flush?: boolean
  action?: boolean
  render?: Function
}

interface ListProps extends CommonProps {
  items: any[]
  render?: Function
  renderItem?: Function
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
      render,
      action,
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
    )
    if (render) {
      return render(rest)
    }
    return <li {...rest} />
  }
}

export function List({ items, render, renderItem, ...rest }: ListProps) {
  rest.className = $c(rest.className, 'list-group')
  if (render) {
    return render({ items, ...rest })
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
