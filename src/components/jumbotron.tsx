import { createComponent, $c } from '../utils'

export interface JumbotronProps {
  fluid?: boolean
}

export const Jumbotron = createComponent<'div', JumbotronProps>(
  'Jumbotron',
  'div',
  ({ fluid }) => $c('jumbotron', fluid && 'jumbotron-fluid'),
)
