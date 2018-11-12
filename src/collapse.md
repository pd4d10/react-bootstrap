### Example

```js
<>
  <div>
    <Button onClick={() => {
      setState(state => ({ visible: !state.visible }))
    }}>Toggle</Button>
    <Collapse visible={state.visible}>
      {props => (
        <div {...props}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life
          accusamus terry richardson ad squid. Nihil anim keffiyeh
          helvetica, craft beer labore wes anderson cred nesciunt sapiente
          ea proident.
        </div>
      )}
    </Collapse>
  </div>
</>
```
