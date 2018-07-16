import React from 'react'
import { Badge, Button } from '../relaunch'

export default () => (
  <div>
    <Badge theme="primary">Primary</Badge>{' '}
    <Badge theme="secondary">Secondary</Badge>{' '}
    <Badge theme="success">Success</Badge> <Badge theme="danger">Danger</Badge>{' '}
    <Badge theme="warning">Warning</Badge> <Badge theme="info">Info</Badge>{' '}
    <Badge theme="light">Light</Badge> <Badge theme="dark">Dark</Badge>
  </div>
)
