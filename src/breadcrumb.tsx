import React from 'react'
import $c from 'classnames'
import * as types from './types'
import { createComponent } from './utils'

export interface BreadcrumbItemProps {
  active?: boolean
}

export const BreadcrumbItem = createComponent<'li', BreadcrumbItemProps>(
  'BreadcrumbItem',
  'li',
  ({ active, ...rest }) => {
    rest.className = $c('breadcrumb-item', active && 'active', rest.className)
    return rest
  },
)

export interface BreadcrumbProps extends types.CommonProps<'ol'> {}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c('breadcrumb', rest.className)
    return (
      <nav aria-label="breadcrumb">
        <ol {...rest} />
      </nav>
    )
  }
}
