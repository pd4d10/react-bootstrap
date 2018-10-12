import React from 'react'
import $c from 'classnames'
import * as types from './types'

interface JumbotronProps extends types.CommonProps {
  fluid?: boolean
}

export class Jumbotron extends React.Component<JumbotronProps> {
  render() {
    const { className, fluid, ...rest } = this.props
    return (
      <div
        className={$c('jumbotron', fluid && 'jumbotron-fluid', className)}
        {...rest}
      />
    )
  }
}
