import * as types from '../../types'
import { createComponent, $c } from '../../utils'

export interface ButtonGroupProps {
  size?: types.Size
  vertical?: boolean
}

export const ButtonGroup = createComponent<'div', ButtonGroupProps>(
  'ButtonGroup',
  'div',
  ({ size, vertical }) =>
    $c(
      'btn-group',
      size && `btn-group-${size}`,
      vertical && 'btn-group-vertical',
    ),
)
