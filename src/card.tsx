import React from 'react'
import $c from 'classnames'
import * as types from './types'

interface CardProps extends types.CommonProps {
  topImage?: React.Component<{ className: string }>
  title?: string | Function
  subtitle?: string | Function
  text?: string | string[]
  extra?: Function
}

export class Card extends React.Component<CardProps> {
  render() {
    const {
      topImage: TopImage,
      title,
      subtitle,
      text,
      extra,
      ...rest
    } = this.props
    rest.className = $c(rest.className, 'card')
    return (
      <div {...rest}>
        {TopImage && <TopImage className="card-img-top" />}
        <div className="card-body">
          {title && <div className="card-title">{title}</div>}
          {subtitle && <div className="card-subtitle">{subtitle}</div>}
          {text &&
            typeof text === 'string' && <p className="card-text">{text}</p>}
          {text &&
            Array.isArray(text) &&
            text.map((t, i) => (
              <p key={i} className="card-text">
                {t}
              </p>
            ))}
          {extra && extra()}
        </div>
      </div>
    )
  }
}
