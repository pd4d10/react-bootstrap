import * as React from 'react'
import { createComponent, $c } from '../utils'

export const Card = createComponent('Card')

export const CardHeader = createComponent('CardHeader')

export const CardBody = createComponent('CardBody')

export const CardFooter = createComponent('CardFooter')

export const CardTitle = createComponent('CardTitle', 'h5')

export const CardText = createComponent('CardText', 'p')

export interface CardImageProps {
  position?: 'top' | 'bottom' | 'overlay'
}

export const CardImage = createComponent<'img', CardImageProps>(
  'CardImage',
  'img',
  ({ position }) => $c('card-img' + (position ? '-' + position : '')),
)
