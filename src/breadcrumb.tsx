import React from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface BreadcrumbItemProps extends CommonProps {
  active?: boolean
}

interface BreadcrumbProps extends CommonProps {}

export class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  render() {
    const { className, active, ...rest } = this.props
    return (
      <li
        className={$c('breadcrumb-item', active && 'active', className)}
        {...rest}
      />
    )
  }
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
  render() {
    const { className, ...rest } = this.props
    return <ol className={$c('breadcrumb', className)} {...rest} />
  }
}
