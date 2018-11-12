import { createComponent, $c } from '../utils'

export interface BreadcrumbItemProps {
  active?: boolean
}

export const BreadcrumbItem = createComponent<'li', BreadcrumbItemProps>(
  'BreadcrumbItem',
  'li',
  ({ active }) => $c('breadcrumb-item', active && 'active'),
)

export const Breadcrumb = createComponent('Breadcrumb', 'ol')
