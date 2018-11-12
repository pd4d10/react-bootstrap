### Example

```js
<>
  <div>
    <Pagination
      total={state.total}
      current={state.page}
      onChange={page => {
        setState({ page })
      }}
    />
  </div>
</>
```
