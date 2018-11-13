import { createComponent, $c } from '../../utils'

export interface LabelProps {
  check?: boolean
}

export const Label = createComponent<'label', LabelProps>(
  'Label',
  'label',
  ({ check }) => $c(check && 'form-check-label'),
)
