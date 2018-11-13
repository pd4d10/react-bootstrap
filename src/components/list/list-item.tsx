import * as types from '../../types'
import { createComponent, $c } from '../../utils'

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
  ({ active, disabled, theme, flush, action }) =>
    $c(
      'list-group-item',
      active && 'active',
      disabled && 'disabled',
      flush && `list-group-item-flush`,
      theme && `list-group-item-${theme}`,
      action && `list-group-item-action`,
    ),
)
