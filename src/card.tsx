import React from 'react'
import $c from 'classnames'
import * as types from './types'
import { getStyle } from './utils'

export interface CardProps extends types.CommonProps {}

export class Card extends React.Component<CardProps> {
  render() {
    const { bsStyle, render, ...rest } = this.props
    rest.className = $c(rest.className, 'card', getStyle(bsStyle))
    if (render) return render({ className: rest.className })
    return <div {...rest} />
  }
}

const withClassName = (displayName: string, className: string, Tag = 'div') =>
  class extends React.Component<types.CommonProps> {
    static displayName = displayName
    render() {
      const { bsStyle, render, ...rest } = this.props
      rest.className = $c(rest.className, className, getStyle(bsStyle))
      if (render) return render({ className: rest.className })
      return <Tag {...rest} />
    }
  }

export const CardHeader = withClassName('CardHeader', 'card-header')

export const CardFooter = withClassName('CardFooter', 'card-footer')

export interface CardBodyProps extends types.CommonProps {}

export class CardBody extends React.Component<CardBodyProps> {
  render() {
    const { bsStyle, render, ...rest } = this.props
    rest.className = $c(rest.className, 'card-body', getStyle(bsStyle))
    if (render) return render({ className: rest.className })
    return <div {...rest} />
  }
}

export interface CardTitleProps extends types.CommonProps {}

export class CardTitle extends React.Component<CardTitleProps> {
  render() {
    const { bsStyle, render, ...rest } = this.props
    rest.className = $c(rest.className, 'card-title', getStyle(bsStyle))
    if (render) return render({ className: rest.className })
    return <h5 {...rest} />
  }
}

export interface CardTextProps extends types.CommonProps {}

export class CardText extends React.Component<CardTextProps> {
  render() {
    const { bsStyle, render, ...rest } = this.props
    rest.className = $c(rest.className, 'card-text', getStyle(bsStyle))
    if (render) return render({ className: rest.className })
    return <p {...rest} />
  }
}

export interface CardImageProps
  extends types.CommonProps<React.ImgHTMLAttributes<HTMLImageElement>> {
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
