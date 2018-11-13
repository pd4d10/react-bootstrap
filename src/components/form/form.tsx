import { createComponent, $c } from '../../utils'

export interface FormProps {
  inline?: boolean
}

export const Form = createComponent<'form', FormProps>(
  'Form',
  'form',
  ({ inline }) => $c(inline && 'form-inline'),
)
