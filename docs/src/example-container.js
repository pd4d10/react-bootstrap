import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Highlight from 'react-highlight.js'

export const ExampleContainer = ({ path, examples }) => (
  <Route
    path={path}
    component={() => (
      <div>
        {examples.map(({ name, component: Com, code }) => (
          <Fragment key={name}>
            <h2 id={name}>
              <div>
                {name}
                <a
                  className="anchorjs-link"
                  href={`#${name}`}
                  style={{
                    paddingLeft: '0.375em',
                  }}
                />
              </div>
            </h2>
            <div className="bd-example">
              <Com />
            </div>
            <figure className="highlight">
              <Highlight language="jsx">{code}</Highlight>
            </figure>
          </Fragment>
        ))}
      </div>
    )}
  />
)
