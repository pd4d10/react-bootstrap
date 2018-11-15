### Example

```js
<Table
  schema={[
    { title: '#', key: 'index' },
    { title: 'First', key: 'first' },
    { title: 'Last', key: 'last' },
    { title: 'Handle', key: 'handle' },
  ]}
  rows={[
    { index: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { index: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { index: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ]}
/>
```

### Theme

```js
<Table
  theme="dark"
  schema={[
    { title: '#', key: 'index' },
    { title: 'First', key: 'first' },
    { title: 'Last', key: 'last' },
    { title: 'Handle', key: 'handle' },
  ]}
  rows={[
    { index: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { index: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { index: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ]}
/>
```

### Thead theme

```js
<Table
  theadTheme="dark"
  schema={[
    { title: '#', key: 'index' },
    { title: 'First', key: 'first' },
    { title: 'Last', key: 'last' },
    { title: 'Handle', key: 'handle' },
  ]}
  rows={[
    { index: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { index: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { index: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ]}
/>
<Table
  theadTheme="light"
  schema={[
    { title: '#', key: 'index' },
    { title: 'First', key: 'first' },
    { title: 'Last', key: 'last' },
    { title: 'Handle', key: 'handle' },
  ]}
  rows={[
    { index: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
    { index: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
    { index: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
  ]}
/>
```
