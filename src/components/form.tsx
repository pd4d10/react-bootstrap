import * as React from 'react'
import * as types from '../types'
import { createComponent, $c } from '../utils'

export interface FormGroupProps {
  check?: boolean
}

export const FormGroup = createComponent<'div', FormGroupProps>(
  'FormGroup',
  'div',
  ({ check, ...rest }) => {
    rest.className = $c(rest.className, 'form-group', check && 'form-check')
    return rest
  },
)

export interface InputProps {
  size: types.Size
}

export const Input = createComponent<'input', InputProps>(
  'Input',
  'input',
  ({ size, ...rest }) => {
    let className = 'form-control'

    if (rest.type && ['file', 'range'].indexOf(rest.type) !== -1) {
      className += '-' + rest.type
    } else if (rest.readOnly) {
      className += '-plaintext'
    } else if (rest.type === 'checkbox') {
      className = 'form-check-input'
    }
    rest.className = $c(
      rest.className,
      className,
      size && 'form-control-' + size,
    )
    return rest
  },
)

export interface LabelProps {
  check?: boolean
}

export const Label = createComponent<'label', LabelProps>(
  'Label',
  'label',
  ({ check, ...rest }) => {
    rest.className = $c(rest.className, check && 'form-check-label')
    return rest
  },
)
