import React from 'react'
import $c from 'classnames'
import * as types from './types'
import { getStyle, createComponent } from './utils'

export const Card = createComponent('Card')

export const CardHeader = createComponent('CardHeader')

export const CardBody = createComponent('CardBody')

export const CardFooter = createComponent('CardFooter')

export const CardTitle = createComponent('CardTitle', 'h5')

export const CardText = createComponent('CardText', 'p')

export interface CardImageProps extends types.CommonProps<'img'> {
  position?: 'top' | 'bottom' | 'overlay'
}

export class CardImage extends React.Component<CardImageProps> {
  render() {
    const { position, bsStyle, render, ...rest } = this.props
    let className = 'card-img'
    if (position) className += '-' + position
    rest.className = $c(rest.className, className, getStyle(bsStyle))
    if (render) return render({ className: rest.className })
    return <img {...rest} />
  }
}
