import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Highlight from 'react-highlight.js'
import { Row, Col } from './relaunch'

export const ExampleContainer = ({ path, examples }) => (
  <Route
    path={path}
    component={() => (
      <div>
        {examples.map(({ name, component: Com, code }) => (
          <Fragment key={name}>
            <h3>{name}</h3>
            <Row>
              <Col>
                <Com />
              </Col>
              <Col>
                <Highlight language="jsx">{code}</Highlight>
              </Col>
            </Row>
          </Fragment>
        ))}
      </div>
    )}
  />
)
