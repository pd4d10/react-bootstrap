import { createComponent, $c } from '../../utils'

export interface CardImageProps {
  position?: 'top' | 'bottom' | 'overlay'
}

export const CardImage = createComponent<'img', CardImageProps>(
  'CardImage',
  'img',
  ({ position }) => $c('card-img' + (position ? '-' + position : '')),
)
