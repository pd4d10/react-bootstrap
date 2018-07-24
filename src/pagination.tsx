import React from 'react'
import $c from 'classnames'
import { CommonProps, Theme, Size, fill } from './utils'

interface PaginationProps extends CommonProps {
  current: number
  total: number
  size?: Size
  onChange: (page: number) => void
  // align: 'center' | 'right'
  renderItem?: (page: number) => React.ReactNode
}

export class Pagination extends React.Component<PaginationProps> {
  handleClick = (index: number) => {
    this.props.onChange(index)
  }

  handlePrevious = () => {
    this.props.onChange(this.props.current - 1)
  }

  handleNext = () => {
    this.props.onChange(this.props.current + 1)
  }

  renderLink = (_: any, index: number) => {
    const page = index + 1
    if (this.props.renderItem) {
      this.props.renderItem(page)
    }
    return (
      <li
        key={index}
        className={$c('page-item', page === this.props.current && 'active')}
      >
        <a
          className="page-link"
          href="javascript:"
          onClick={e => {
            this.handleClick(page)
          }}
        >
          {page}
        </a>
      </li>
    )
  }

  render() {
    const { size, className, current, total } = this.props

    return (
      <nav>
        <ul
          className={$c(className, 'pagination', size && `pagination-${size}`)}
        >
          <li className={$c('page-item', current <= 1 && 'disabled')}>
            <a
              className="page-link"
              href="javascript:"
              onClick={this.handlePrevious}
            >
              Previous
            </a>
          </li>
          {fill(total).map(this.renderLink)}
          <li className={$c('page-item', current >= total && 'disabled')}>
            <a
              className="page-link"
              href="javascript:"
              onClick={this.handleNext}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
