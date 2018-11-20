import * as React from 'react'
import * as types from '../../types'

export interface ProgressBarProps extends types.CommonProps {
  percent: number
  theme?: types.Theme
  striped?: boolean
  animated?: boolean
  label?: React.ReactNode
}

export class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const { percent, theme, striped, animated, label, ...rest } = this.props
    rest.className = $c(
      'progress-bar',
      theme && `bg-${theme}`,
      (striped || animated) && 'progress-bar-striped',
      animated && 'progress-bar-animated',
    )
    rest.style = { ...rest.style, width: `${percent}%` }
    return (
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        {...rest}
      >
        {label}
      </div>
    )
  }
}
