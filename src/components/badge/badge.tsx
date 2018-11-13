import * as types from '../../types'
import { createComponent, $c } from '../../utils'

export interface BadgeProps {
  theme: types.Theme
  pill?: boolean
}

export const Badge = createComponent<'span', BadgeProps>(
  'Badge',
  'span',
  ({ theme, pill }) => $c('badge', `badge-${theme}`, pill && 'badge-pill'),
)
