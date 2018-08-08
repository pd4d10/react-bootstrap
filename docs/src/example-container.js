import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Highlight from 'react-highlight.js'

// export const CodeContainer = ({ children }) => (
// )

export const DemoContainer = ({ component: Component, code }) => (
  <React.Fragment>
    <div className="bd-example">
      <Component />
    </div>
    <figure className="highlight">
      <Highlight language="jsx">{code}</Highlight>
    </figure>
  </React.Fragment>
)

export const ExampleContainer = ({ path, examples }) => (
  <Route
    path={path}
    component={() => (
      <div className="py-md-3 pl-md-5 bd-content">
        {examples.map(({ name, description, component: Component, code }) => (
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
            {description}
            <div className="bd-example">
              <Component />
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
