import React from 'react'
import $c from 'classnames'
import * as types from './types'

type JumbotronProps = types.CommonProps & {
  fluid?: boolean
}

export class Jumbotron extends React.Component<JumbotronProps> {
  render() {
    const { fluid, render, ...rest } = this.props
    rest.className = $c(rest.className, 'jumbotron', fluid && 'jumbotron-fluid')
    if (render) {
      return render({ className: rest.className })
    }
    return <div {...rest} />
  }
}
