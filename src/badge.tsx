import $c from 'classnames'
import * as types from './types'
import { createComponent } from './utils'

export interface BadgeProps {
  theme: types.Theme
  pill?: boolean
}

export const Badge = createComponent<'span', BadgeProps>(
  'Badge',
  'span',
  ({ theme, pill, ...rest }) => {
    rest.className = $c(
      rest.className,
      'badge',
      `badge-${theme}`,
      pill && 'badge-pill',
    )
    return rest
  },
)
