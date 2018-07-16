import React from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface JumbotronProps extends CommonProps {
  fluid?: boolean
}

export function Jumbotron({ className, fluid, ...rest }: JumbotronProps) {
  return (
    <div
      className={$c('jumbotron', fluid && 'jumbotron-fluid', className)}
      {...rest}
    />
  )
}
