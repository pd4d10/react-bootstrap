import * as React from 'react'
import * as types from '../types'
import { createComponent, $c } from '../utils'

export interface ListItemProps {
  active?: boolean
  disabled?: boolean
  theme?: types.Theme
  flush?: boolean
  action?: boolean
}

export const ListItem = createComponent<'li', ListItemProps>(
  'ListItem',
  'li',
  ({ active, disabled, theme, flush, action, ...rest }) => {
    rest.className = $c(
      rest.className,
      'list-group-item',
      active && 'active',
      disabled && 'disabled',
      flush && `list-group-item-flush`,
      theme && `list-group-item-${theme}`,
      action && `list-group-item-action`,
    )
    return rest
  },
)

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
