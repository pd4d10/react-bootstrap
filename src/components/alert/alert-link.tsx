import * as React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { $c } from '../../utils'

export class AlertLink extends React.Component<LinkProps> {
  render() {
    const { ...rest } = this.props
    rest.className = $c(this.props.className, 'alert-link')
    return <Link {...rest} />
  }
}
