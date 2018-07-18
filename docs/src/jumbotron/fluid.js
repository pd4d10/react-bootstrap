import React from 'react'
import { Jumbotron } from 'relaunch'

export default () => (
  <Jumbotron fluid>
    <div className="container">
      <h1 className="display-4">Fluid jumbotron</h1>
      <p className="lead">
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
    </div>
  </Jumbotron>
)
