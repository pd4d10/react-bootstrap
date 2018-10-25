import React from 'react'
import $c from 'classnames'
import { createComponent } from './utils'

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
