import React from 'react'
import { Button } from '../relaunch'

export default () => (
  <div>
    <Button type="primary" outline>
      primary
    </Button>{' '}
    <Button type="secondary" outline>
      secondary
    </Button>{' '}
    <Button type="success" outline>
      success
    </Button>{' '}
    <Button type="info" outline>
      info
    </Button>{' '}
    <Button type="warning" outline>
      warning
    </Button>{' '}
    <Button type="danger" outline>
      danger
    </Button>{' '}
    <Button type="light" outline>
      light
    </Button>{' '}
    <Button type="dark" outline>
      dark
    </Button>
  </div>
)
