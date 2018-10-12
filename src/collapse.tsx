import React, { Component } from 'react'
import $c from 'classnames'
import * as types from './types'

interface CollapseProps extends types.CommonProps {
  visible?: boolean
}

export class Collapse extends Component<CollapseProps> {
  render() {
    const { visible, children, ...rest } = this.props
    rest.className = $c(rest.className, 'collapse', visible && 'show')
    return (this.props.children as Function)(rest)
  }
}
