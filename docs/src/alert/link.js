import React, { Fragment } from 'react'
import { Alert } from '../relaunch'

export default () => (
  <Fragment>
    <Alert theme="primary">
      A simple primary alert with{' '}
      <a href="#" class="alert-link">
        an example link
      </a>. Give it a click if you like.
    </Alert>
    <Alert theme="secondary">
      A simple secondary alert with{' '}
      <a href="#" class="alert-link">
        an example link
      </a>. Give it a click if you like.
    </Alert>
  </Fragment>
)
