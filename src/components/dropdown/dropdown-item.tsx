import { createComponent, $c } from '../../utils'

export interface DropdownItemProps {
  active?: boolean
  disabled?: boolean
}

export const DropdownItem = createComponent<'a', DropdownItemProps>(
  'DropdownItem',
  'a',
  ({ active, disabled }) =>
    $c('dropdown-item', active && 'active', disabled && 'disabled'),
)
