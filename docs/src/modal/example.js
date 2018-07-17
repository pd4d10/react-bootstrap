import React, { Component } from 'react'
import { Modal, Button } from '../relaunch'

export default class Example extends Component {
  state = {
    visible: false,
  }

  toggleVisible = () => {
    this.setState(state => ({
      visible: !state.visible,
    }))
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleVisible}>Toggle</Button>
        <Modal
          visible={this.state.visible}
          body={<div>Woohoo, you're reading this text in a modal!</div>}
          onFinish={this.toggleVisible}
          onCancel={this.toggleVisible}
        />
      </div>
    )
  }
}
