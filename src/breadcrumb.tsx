import React from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface BreadcrumbItem {
  active?: boolean
  render: Function
}
interface BreadcrumbProps extends CommonProps {
  items: BreadcrumbItem[]
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
  render() {
    const { className, items, ...rest } = this.props
    return (
      <ol className={$c('breadcrumb', className)} {...rest}>
        {items.map(({ render, active }) => {
          return (
            <li className={$c('breadcrumb-item', { active })}>{render()}</li>
          )
        })}
      </ol>
    )
  }
}

// export const BreadcrumbItem = ({
//   tag: Tag = 'li',
//   className,
//   active,
//   ...rest
// }: BreadcrumbItemProps) => (
//   <Tag className={$c('breadcrumb-item', className, { active })} {...rest} />
// )
