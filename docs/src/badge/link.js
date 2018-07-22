import React from 'react'
import { Badge, Button } from 'relaunch'

export default () => (
  <div>
    <Badge
      theme="primary"
      render={props => (
        <a href="javascript:" {...props}>
          Primary
        </a>
      )}
    />{' '}
    <Badge
      theme="secondary"
      render={props => (
        <a href="javascript:" {...props}>
          Secondary
        </a>
      )}
    />{' '}
    <Badge
      theme="success"
      render={props => (
        <a href="javascript:" {...props}>
          Success
        </a>
      )}
    />{' '}
    <Badge
      theme="danger"
      render={props => (
        <a href="javascript:" {...props}>
          Danger
        </a>
      )}
    />
  </div>
)
