import React, { Component } from 'react'

export default class ClickOutside extends Component {
  $: React.Ref
  isTouch = false

  render() {
    const { children, onClickOutside, ...props } = this.props
    return (
      <div
        {...props}
        ref={ref => {
          this.$ = ref
        }}
      >
        {children}
      </div>
    )
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, true)
  }

  handleClick = e => {
    const { onClickOutside } = this.props
    const el = this.container
    if (el && !el.contains(e.target)) onClickOutside(e)
  }
}
