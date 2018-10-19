import React, { LiHTMLAttributes, OlHTMLAttributes } from 'react'
import $c from 'classnames'

interface BreadcrumbItemProps extends LiHTMLAttributes<HTMLLIElement> {
  active?: boolean
}

export class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  render() {
    const { active, ...rest } = this.props
    rest.className = $c('breadcrumb-item', active && 'active', rest.className)
    return <li aria-current="page" {...rest} />
  }
}

interface BreadcrumbProps extends OlHTMLAttributes<HTMLOListElement> {}

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
