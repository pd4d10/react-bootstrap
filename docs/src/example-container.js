import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Highlight from 'react-highlight.js'

export const ExampleContainer = ({ path, examples }) => (
  <Route
    path={path}
    component={() => (
      <div className="py-md-3 pl-md-5 bd-content">
        {examples.map(({ name, description, component: Com, code }) => (
          <Fragment key={name}>
            {name && (
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
            )}
            {description && <p>{description}</p>}
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
