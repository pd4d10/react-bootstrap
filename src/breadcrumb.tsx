import $c from 'classnames'
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

export const Breadcrumb = createComponent('Breadcrumb', 'ol')
