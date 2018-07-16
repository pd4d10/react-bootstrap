import React from 'react'
import { Button } from '../relaunch'

export default () => (
  <div>
    <Button theme="primary" outline>
      Primary
    </Button>{' '}
    <Button theme="secondary" outline>
      Secondary
    </Button>{' '}
    <Button theme="success" outline>
      Success
    </Button>{' '}
    <Button theme="info" outline>
      Info
    </Button>{' '}
    <Button theme="warning" outline>
      Warning
    </Button>{' '}
    <Button theme="danger" outline>
      Danger
    </Button>{' '}
    <Button theme="light" outline>
      Light
    </Button>{' '}
    <Button theme="dark" outline>
      Dark
    </Button>
  </div>
)
