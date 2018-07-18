import React, { Fragment } from 'react'
import { List, ListItem, Badge } from 'relaunch'

export default () => (
  <Fragment>
    <List
      items={[
        'Cras justo odio',
        'Dapibus ac facilisis in',
        'Morbi leo risus',
        'Porta ac consectetur ac',
        'Vestibulum at eros',
      ]}
    />
    <List
      items={[
        "I'am active",
        'Dapibus ac facilisis in',
        "I'am disabled",
        'Porta ac consectetur ac',
        'Vestibulum at eros',
      ]}
      renderItem={(item, index) => (
        <ListItem active={index === 0} disabled={index === 2}>
          {item}
        </ListItem>
      )}
    />
    <List
      items={[
        undefined,
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ]}
      renderItem={item => (
        <ListItem theme={item}>A simple {item} list group item</ListItem>
      )}
    />
    <List
      items={[
        { text: 'Cras justo odio', count: 14 },
        { text: 'Dapibus ac facilisis', count: 2 },
        { text: 'Morbi leo risus', count: 1 },
      ]}
      renderItem={({ text, count }) => (
        <ListItem className="d-flex justify-content-between align-items-center">
          {text}
          <Badge pill>{count}</Badge>
        </ListItem>
      )}
    />
    <List
      items={[0, 0, 0]}
      renderItem={(_, index) => (
        <ListItem
          action
          active={index === 0}
          render={({ className, ...props }) => (
            <a
              href="#"
              className={'flex-column align-items-start ' + className}
              {...props}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </a>
          )}
        />
      )}
    />
  </Fragment>
)
