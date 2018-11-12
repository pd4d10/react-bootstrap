import * as React from 'react'
import * as types from '../types'
import { createComponent, $c } from '../utils'

export interface ButtonGroupProps {
  size?: types.Size
  vertical?: boolean
}

export const ButtonGroup = createComponent<'div', ButtonGroupProps>(
  'ButtonGroup',
  'div',
  ({ size, vertical, ...rest }) => {
    rest.className = $c(
      rest.className,
      'btn-group',
      size && `btn-group-${size}`,
      vertical && 'btn-group-vertical',
    )
    return rest
  },
)

export const ButtonToolbar = createComponent('ButtonToolbar')
