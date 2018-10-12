import React from 'react'
import $c from 'classnames'
import * as types from './types'

interface ProgressBarProps extends types.CommonProps {
  percent: number
  theme?: types.Theme
  striped?: boolean
  animated?: boolean
  label?: React.ReactNode
}

interface ProgressProps extends ProgressBarProps {
  multiple?: ProgressBarProps[]
}

class ProgressBar extends React.Component<ProgressBarProps> {
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

export class Progress extends React.Component<ProgressProps> {
  render() {
    const {
      className,
      percent,
      theme,
      striped,
      animated,
      label,
      multiple,
      ...rest
    } = this.props
    return (
      <div className={$c(className, 'progress')} {...rest}>
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
