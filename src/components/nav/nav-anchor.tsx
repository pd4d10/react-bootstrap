import { createComponent, $c } from '../../utils'

export interface NavAnchorProps {
  active?: boolean
  disabled?: boolean
}

export const NavAnchor = createComponent<'a', NavAnchorProps>(
  'NavAnchor',
  'a',
  ({ active, disabled }) =>
    $c('nav-link', 'nav-item', active && 'active', disabled && 'disabled'),
)
