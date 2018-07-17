import React from 'react'
import { ButtonGroup, ButtonToolbar, Button } from '../relaunch'

export default () => (
  <div>
    <ButtonGroup>
      <Button theme="secondary">Left</Button>
      <Button theme="secondary">Middle</Button>
      <Button theme="secondary">Right</Button>
    </ButtonGroup>

    <ButtonToolbar>
      <ButtonGroup className="mr-2">
        <Button theme="secondary">1</Button>
        <Button theme="secondary">2</Button>
        <Button theme="secondary">3</Button>
        <Button theme="secondary">4</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <Button theme="secondary">5</Button>
        <Button theme="secondary">6</Button>
        <Button theme="secondary">7</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button theme="secondary">8</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonGroup>
      <Button theme="secondary" size="lg">
        Large
      </Button>
    </ButtonGroup>
  </div>
)
