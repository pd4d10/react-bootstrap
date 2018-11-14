import { createComponent, $c } from '../../utils'

export interface NavLinkProps {
  active?: boolean
  disabled?: boolean
}

export const NavLink = createComponent<'a', NavLinkProps>(
  'NavLink',
  'a',
  ({ active, disabled }) =>
    $c('nav-link', 'nav-item', active && 'active', disabled && 'disabled'),
)
