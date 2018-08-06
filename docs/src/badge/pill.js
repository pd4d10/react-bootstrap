import React from 'react'
import { Badge } from 'relaunch'

export const PillExample = () => (
  <div>
    <Badge theme="primary" pill>Primary</Badge>{' '}
    <Badge theme="secondary" pill>Secondary</Badge>{' '}
    <Badge theme="success" pill>Success</Badge>{' '}
    <Badge theme="danger" pill>Danger</Badge>{' '}
    <Badge theme="warning" pill>Warning</Badge>{' '}
    <Badge theme="info" pill>Info</Badge>{' '}
    <Badge theme="light" pill>Light</Badge>{' '}
    <Badge theme="dark" pill>Dark</Badge>
  </div>
)
