import React from 'react'
import $c from 'classnames'
import * as types from './types'
import { getStyle } from './utils'

type JumbotronProps = types.CommonProps & {
  fluid?: boolean
}

export class Jumbotron extends React.Component<JumbotronProps> {
  render() {
    const { fluid, render, bsStyle, ...rest } = this.props
    rest.className = $c(
      rest.className,
      'jumbotron',
      fluid && 'jumbotron-fluid',
      getStyle(bsStyle),
    )
    if (render) {
      return render({ className: rest.className })
    }
    return <div {...rest} />
  }
}
