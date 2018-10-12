import React from 'react'
import $c from 'classnames'
import * as types from './types'

type FormProps = types.CommonProps

export class Form extends React.Component<FormProps> {
  render() {
    const { render, ...rest } = this.props
    return <form {...rest} />
  }
}

type FormGroupProps = types.CommonProps & { check?: boolean }

export class FormGroup extends React.Component<FormGroupProps> {
  render() {
    const { check, ...rest } = this.props
    rest.className = $c(rest.className, 'form-group', check && 'form-check')
    return <div {...rest} />
  }
}

type InputProps = types.CommonProps<React.InputHTMLAttributes<HTMLElement>> & {
  size: types.Size
}

export class Input extends React.Component<InputProps> {
  getFormControlClassName = () => {
    let className = 'form-control'

    if (this.props.type && ['file', 'range'].indexOf(this.props.type) !== -1) {
      className += '-' + this.props.type
    } else if (this.props.readOnly) {
      className += '-plaintext'
    } else if (this.props.type === 'checkbox') {
      className = 'form-check-input'
    }
    return className
  }

  render() {
    const { size, ...rest } = this.props
    rest.className = $c(
      rest.className,
      this.getFormControlClassName(),
      size && 'form-control-' + size,
    )
    return <input {...rest} />
  }
}

type LabelProps = types.CommonProps<React.LabelHTMLAttributes<HTMLElement>> & {
  check?: boolean
}

export class Label extends React.Component<LabelProps> {
  render() {
    const { check, ...rest } = this.props
    rest.className = $c(rest.className, check && 'form-check-label')
    return <label {...rest} />
  }
}
