import React, { Component, Fragment } from 'react'
import $c from 'classnames'
import { CommonProps, Theme } from './utils'

interface CarouselProps extends CommonProps {
  items: any[]
  interval?: number
  direction?: 'left' | 'right'
  mode?: 'slide' | 'fade'
  renderItem?: (
    item: any,
    index: number,
    activeIndex: number,
  ) => React.ReactNode
  indicators?: boolean
  controls?: boolean
}

type CarouselState = {
  timerId: number | undefined
  activeIndex: number
}

export class Carousel extends Component<CarouselProps, CarouselState> {
  state = {
    timerId: undefined,
    activeIndex: 0,
  }

  static defaultProps = {
    mode: 'slide',
    direction: 'right',
    interval: 2000,
    indicators: true,
    controls: true,
  }

  mod = (index: number) => {
    const len = this.props.items.length
    if (len === 0) {
      return 0
    }
    // Make sure the result is not negative
    return (index + len) % len
  }

  startTimer = () => {
    const timerId = setTimeout(() => {
      this.setState(state => ({
        ...state,
        activeIndex: this.mod(
          this.state.activeIndex + (this.props.direction === 'right' ? 1 : -1),
        ),
      }))
      this.startTimer()
    }, this.props.interval)
    this.setState({ timerId })
  }

  clearTimer = () => {
    clearTimeout(this.state.timerId)
  }

  goTo = (index: number) => {
    this.setState({ activeIndex: index })
    this.clearTimer()
    this.startTimer()
  }

  prev = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    this.goTo(this.mod(this.state.activeIndex - 1))
  }

  next = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    this.goTo(this.mod(this.state.activeIndex + 1))
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  render() {
    const {
      items,
      mode,
      interval,
      renderItem,
      indicators,
      controls,
      ...rest
    } = this.props
    rest.className = $c(
      rest.className,
      'carousel',
      'slide',
      mode === 'fade' && 'carousel-fade',
    )
    return (
      <div {...rest}>
        <div className="carousel-inner">
          {indicators && (
            <ol className="carousel-indicators">
              {items.map((item, index) => {
                const isActive = this.state.activeIndex === index
                return (
                  <li
                    className={$c(isActive && 'active')}
                    onClick={() => this.goTo(index)}
                  />
                )
              })}
            </ol>
          )}
          {items.map((item, index) => {
            if (renderItem) {
              return renderItem(item, index, this.state.activeIndex)
            }
            return (
              <div
                className={$c(
                  'carousel-item',
                  this.state.activeIndex === index && 'active',
                )}
                key={index}
              >
                <img className="d-block w-100" src={item} />
              </div>
            )
          })}
          {controls && (
            <Fragment>
              <a
                className="carousel-control-prev"
                href="#"
                role="button"
                onClick={this.prev}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#"
                role="button"
                onClick={this.next}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}
