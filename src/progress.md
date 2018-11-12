### Example

```js
<>
  <Progress percent={50} />
  <Progress percent={50} style={{ height: 1 }} />
  <Progress percent={50} label={<span>50%</span>} />
  <Progress percent={50} theme="success" />
  <Progress percent={50} striped />
  <Progress percent={50} animated />
  <Progress multiple={[{ percent: 50 }, { percent: 25, theme: 'info' }]} />
</>
```
