import React from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface JumbotronProps extends CommonProps {
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
