import React, { Component } from 'react'
import { Pagination } from 'relaunch'

export default class Example extends Component {
  state = {
    page: 2,
    total: 10,
  }

  handleChange = page => {
    this.setState({ page })
  }

  render() {
    return (
      <div>
        <Pagination
          total={this.state.total}
          current={this.state.page}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
