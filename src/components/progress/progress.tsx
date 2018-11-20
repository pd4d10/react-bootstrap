import * as React from 'react'
import { $c } from '../../utils'

export type ProgressProps = ProgressBarProps & {
  multiple?: ProgressBarProps[]
}

export class Progress extends React.Component<ProgressProps> {
  render() {
    const {
      percent,
      theme,
      striped,
      animated,
      label,
      multiple,
      render,
      ...rest
    } = this.props
    rest.className = $c(rest.className, 'progress')
    if (render) {
      return render({ className: rest.className })
    }
    return (
      <div {...rest}>
        {multiple ? (
          multiple.map((item, index) => <ProgressBar key={index} {...item} />)
        ) : (
          <ProgressBar
            {...{
              percent,
              theme,
              striped,
              animated,
              label,
            }}
          />
        )}
      </div>
    )
  }
}
