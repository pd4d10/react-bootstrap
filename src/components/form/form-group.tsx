import { createComponent, $c } from '../../utils'

export interface FormGroupProps {
  check?: boolean
}

export const FormGroup = createComponent<'div', FormGroupProps>(
  'FormGroup',
  'div',
  ({ check }) => $c('form-group', check && 'form-check'),
)
