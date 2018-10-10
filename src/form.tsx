import React from 'react'
import $c from 'classnames'
import { CommonProps } from './utils'

interface FormProps extends CommonProps {}

interface FormItemProps extends CommonProps {}

export class Form extends React.Component<FormProps> {
  render() {
    const { ...rest } = this.props
    return <form {...rest} />
  }
}

export class FormItem extends React.Component<FormItemProps> {
  render() {
    const { className, children, ...rest } = this.props

    return (
      <div className={$c('form-group', className)} {...rest}>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
    )
  }
}
