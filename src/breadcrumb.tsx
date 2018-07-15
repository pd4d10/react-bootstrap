import React, { Component } from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface BreadcrumbProps extends CommonProps {}
interface BreadcrumbItemProps extends CommonProps {
  tag?: string
  active?: boolean
}

export function Breadcrumb({ className, ...rest }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={$c('breadcrumb', className)} {...rest} />
    </nav>
  )
}

export const BreadcrumbItem = ({
  tag: Tag = 'li',
  className,
  active,
  ...rest
}: BreadcrumbItemProps) => (
  <Tag className={$c('breadcrumb-item', className, { active })} {...rest} />
)
