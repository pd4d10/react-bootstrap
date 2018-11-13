import * as types from '../../types'
import { $c, createComponent } from '../../utils'

export interface ContainerProps extends types.CommonProps {
  fluid?: boolean
}

export const Container = createComponent<'div', ContainerProps>(
  'Container',
  'div',
  ({ fluid }) => $c(fluid ? 'container-fluid' : 'container'),
)
