import React from 'react'
import { createComponent, $c } from '../utils'

export interface JumbotronProps {
  fluid?: boolean
}

export const Jumbotron = createComponent<'div', JumbotronProps>(
  'Jumbotron',
  'div',
  ({ fluid, ...rest }) => {
    rest.className = $c(rest.className, 'jumbotron', fluid && 'jumbotron-fluid')
    return rest
  },
)
