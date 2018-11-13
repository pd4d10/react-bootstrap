import * as React from 'react'
import * as types from '../../types'
import { createComponent, $c } from '../../utils'

export interface InputProps extends types.CommonProps<'input'> {
  size: types.Size
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
  readOnly: React.InputHTMLAttributes<HTMLInputElement>['readOnly']
  onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange']
}

export const Input = createComponent<'input', InputProps>(
  'Input',
  'input',
  ({ size, type, readOnly }) => {
    let className = 'form-control'

    if (type && ['file', 'range'].indexOf(type) !== -1) {
      className += '-' + type
    } else if (readOnly) {
      className += '-plaintext'
    } else if (type === 'checkbox') {
      className = 'form-check-input'
    }

    return $c(className, size && 'form-control-' + size)
  },
)
